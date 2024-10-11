'use client'
import React from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
import Dashboard from '@/components/Dashboard';

export default async function Page() {
  return (
   <Dashboard/>
  )
}

