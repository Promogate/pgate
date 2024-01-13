import { api } from '@/config';
import { prisma } from '@/config/prisma';
import { Params } from '@/modules/cache/@types';
import { RedisService } from '@/modules/cache/application';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: Params) {
  // const redis = new RedisService();
  // const cached = await redis.getCache({ cacheKey: params.code });
  // if (!cached) {
  const urlData = await prisma.url.findUnique({
    where: {
      code: params.code
    }
  });
  if (!urlData) return NextResponse.redirect('https://promogate.app/link-nao-encontrado');
  if (urlData.type === "redirector") {
    const { data } = await api.get(`/redirector/${urlData.redirector_id}`)
    // await redis.setCache({ cacheKey: params.code, content: data });
    return NextResponse.redirect(data);
  }
  if (urlData.type === "offer") {
    const { data } = await api.get(`/offer/redirector/${urlData.redirector_id}`)
    // await redis.setCache({ cacheKey: params.code, content: urlData });
    return NextResponse.redirect(data.offer.destination_link);
  }
  // }
  // return NextResponse.redirect(cached.destination_link);
}