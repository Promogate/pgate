import { prisma } from '@/config/prisma';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json() as { full_link: string };
  
  const code = nanoid(8);

  const res = await prisma.url.create({
    data: {
      code,
      full_link: body.full_link,
      short_link: `https://pgate.app/${code}`
    }
  })
  return NextResponse.json({ res });
}