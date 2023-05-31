import { prisma } from '@/config/prisma';
import { NextResponse } from 'next/server';

type Params = {
  params: {
    code: string;
  }
}

export async function GET(request: Request, { params }: Params) {
  const res = await prisma.url.findUnique({
    where: {
      code: params.code
    }
  })

  if (!res) {
    return NextResponse.redirect('https://promogate.app/link-nao-encontrado')
  }

  return NextResponse.redirect(res.full_link)
}