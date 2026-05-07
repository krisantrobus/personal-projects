import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: 'Hello from Next.js!' },
    {
      headers: {
        // 'Access-Control-Allow-Origin': '*', // Replace '*' with your specific domain for security
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    },
  );
}
