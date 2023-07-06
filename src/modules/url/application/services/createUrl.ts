import { prisma } from '@/config/prisma';
import { CreateUrl } from '@/modules/url/domain/features';
import { nanoid } from 'nanoid';

export class CreateUrlService implements CreateUrl {
  async execute(input: CreateUrl.Input): Promise<CreateUrl.Ouput> {
    let code = nanoid(8);

    const codeAlreadyExists = await prisma.url.findUnique({
      where: {
        code: code
      }
    })

    while (codeAlreadyExists) {
      code = nanoid(8);
    }

    const result = await prisma.url.create({
      data: {
        code: code,
        full_link: input.fullLink,
        short_link: `https://pgate.app/${code}`,
        offer_id: input.offerId,
        store_name: input.storeName,
        resource_id: input.resourceId,
        destination_link: input.destinationLink
      }
    })
    
    return {
      id: result.id,
      code: result.code,
      resourceId: result.resource_id,
      offerId: result.offer_id,
      storeName: result.store_name,
      fullLink: result.full_link,
      shortLink: result.short_link,
      createdAt: result.created_at
    }
  }
}