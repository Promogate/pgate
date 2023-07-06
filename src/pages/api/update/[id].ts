import { prisma } from '@/config';
import { RedisService } from '@/modules/cache/application';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === 'PUT') {
    const { id: offerId } = req.query as { id: string };
    const { destinationLink } = req.body as { destinationLink: string };
    const cacheService = new RedisService();
    const offer = await prisma.url.findFirst({ where: { offer_id: offerId } })
    if(!offer) return res.status(400).json({ message: 'Não foi possível atualizar os dados do shortlink.' })
    await cacheService.deleteCache({ cacheKey: offer.code })
    const newOfferData = await prisma.url.update({ 
      where: { 
        id: offer.id 
      },
      data: {
        destination_link: destinationLink
      }
    })
    await cacheService.setCache({ cacheKey: newOfferData.code, content: newOfferData })
    return res.status(200).json({ message: 'Shortlink atualizado com sucesso' })
  }

  return res.status(403).json({ message: 'Método não implementado' })
}