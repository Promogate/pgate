import { prisma } from '@/config/prisma';
import { Params } from '@/modules/cache/@types';
import { NextResponse } from 'next/server';

// export async function GET(request: Request, { params }: Params) {
//   const redis = new RedisService();
//   const cached = await redis.getCache({ id: params.code })
//   if(!cached) {
//     const findURL = await prisma.url.findUnique({
//       where: {
//         code: params.code
//       }
//     })
//     if (!findURL) return NextResponse.redirect('https://promogate.app/link-nao-encontrado');
//     const { data } = await api.get<APIResponse>(`/resources/${findURL.resource_id}/offer/${findURL.offer_id}`);
//     await redis.setCache({ content: data.offer, id: params.code });
//     return NextResponse.redirect(data.offer.destination_link);
//   }
//   return NextResponse.redirect(cached.destination_link);
// }
export async function GET(request: Request, { params }: Params) {
    const findURL = await prisma.url.findUnique({
      where: {
        code: params.code
      }
    })
    if (!findURL) return NextResponse.redirect('https://promogate.app/link-nao-encontrado');
    return NextResponse.redirect(findURL.full_link);
}