import React from 'react'
import { UserAuthForm } from "@/components/Auth";


const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center border-black">
        <UserAuthForm />
    </div>
  )
}

export default page