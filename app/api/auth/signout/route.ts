// app/api/auth/signout/route.ts
import { NextResponse } from 'next/server';
import { signOut } from '@/auth';

export async function POST() {
  await signOut(); // Sign out and redirect to the homepage
  return NextResponse.json({ success: true });
}
