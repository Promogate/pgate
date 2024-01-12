import { prisma } from '@/config/prisma';
import { CreateRedirectorUrl, CreateUrl } from '@/modules/url/domain/features';
import { nanoid } from 'nanoid';

export class CreateRedirectorUrlService implements CreateRedirectorUrl {
  async execute(input: CreateRedirectorUrl.Input): Promise<CreateRedirectorUrl.Ouput> {
    let code = nanoid(8);

    const codeAlreadyExists = await prisma.redirectorUrl.findUnique({
      where: {
        code: code
      }
    })

    while (codeAlreadyExists) {
      code = nanoid(8);
    }

    const result = await prisma.redirectorUrl.create({
      data: {
        code: code,
        short_link: `https://pgate.app/${code}`,
        destination_link: input.destinationLink,
        redirector_id: input.redirectorId
      }
    })
    
    return {
      id: result.id,
      code: result.code,
      shortLink: result.short_link,
      destinationLink: result.destination_link
    }
  }
}