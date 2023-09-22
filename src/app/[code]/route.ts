import { prisma } from '@/config/prisma';
import { Params } from '@/modules/cache/@types';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: Params) {
  // const redis = new RedisService();
  // const cached = await redis.getCache({ cacheKey: params.code });
  // console.time();
  // if (!cached) {
  // console.time();
  const findURL = await prisma.url.findUnique({
    where: {
      code: params.code
    }
  });
  console.log({ findURL: findURL });
  if (!findURL) return NextResponse.redirect('https://promogate.app/link-nao-encontrado');
  // const { data } = await api.get<APIResponse>(`/resources/offer`, {
  //   headers: {
  //     'x-short-link': findURL.short_link
  //   }
  // });
  // console.log(data)
  // await redis.setCache({ cacheKey: params.code, content: findURL });
  // return NextResponse.redirect(data.offer.destination_link);
  //   console.timeEnd();
  //   console.log("passed throw api");
  //   return NextResponse.redirect(`https://api.promogate.app/analytics/redirect/offer/${findURL.offer_id}`);
  // }
  // console.timeEnd();
  // return NextResponse.redirect(cached.destination_link);
  return NextResponse.redirect(`https://api.promogate.app/analytics/redirect/offer/with-query?shortLink=${findURL.short_link}`);
}