
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options';


async function page() {
  const session = await getServerSession(authOptions)

  return (
    <div>
    <p> {JSON.stringify(session)} </p>
    </div>
  )
}

export default page