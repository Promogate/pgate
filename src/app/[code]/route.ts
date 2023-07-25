import { api } from '@/config';
import { prisma } from '@/config/prisma';
import { APIResponse, Params } from '@/modules/cache/@types';
import { RedisService } from '@/modules/cache/application';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: Params) {
  const redis = new RedisService();
  const cached = await redis.getCache({ cacheKey: params.code});
  if (!cached) {
    const findURL = await prisma.url.findUnique({
      where: {
        code: params.code
      }
    })
    if (!findURL) return NextResponse.redirect('https://promogate.app/link-nao-encontrado');
    const { data } = await api.get<APIResponse>(`/resources/offer`, {
      headers: {
        'x-short-link': findURL.short_link
      }
    });
    await redis.setCache({ cacheKey: params.code, content: data.offer })
    return NextResponse.redirect(data.offer.destination_link);
  }
  return NextResponse.redirect(cached.destination_link);
}