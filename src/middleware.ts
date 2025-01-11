import { NextRequest, NextResponse } from 'next/server';
import {
  ALLOWED_HEADERS,
  ALLOWED_METHODS,
  CORS_ORIGIN,
} from './app/utils/variables';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const origin = request.headers.get('origin') ?? '';

  if (CORS_ORIGIN.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
