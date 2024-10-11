import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const {data:session} = useSession();
  console.log(session)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard