'use client'

import { useSession } from 'next-auth/react'
import Main from '../../components/Main.jsx'
import Navbar from '../../components/Navbar.jsx'

export default function Home({ children }) {
  const { data: session, status } = useSession()
  return (
    <div className='h-full   w-screen'>
      <title> Spotify 2.0</title>
      <main>
        {/* center */}
        <Navbar/>
        <Main />

        <h1>sdasd</h1>
      </main>
    </div>
  )
}
