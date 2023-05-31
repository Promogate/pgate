import { CreateUrlInput } from '@/modules/url/@types';
import { CreateUrlService } from '@/modules/url/application/services';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json() as CreateUrlInput;
  
  const createUrlService = new CreateUrlService();
  
  const result = await createUrlService.execute(body)

  return NextResponse.json({ data: result });
}