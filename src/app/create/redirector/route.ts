import { CreateRedirectorUrlInput } from '@/modules/url/@types';
import { CreateRedirectorUrlService } from '@/modules/url/application/services';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json() as CreateRedirectorUrlInput;
  
  const createRedirectorUrlService = new CreateRedirectorUrlService();
  
  const result = await createRedirectorUrlService.execute(body)

  return NextResponse.json({ data: result });
}