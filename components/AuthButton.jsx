import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const AuthAndProfileButtons = () => {
  const { data: session, status } = useSession()
  const Buttons = () => {
    if (status !== 'authenticated') {
      return (
        
        <button onClick={() => signIn('spotify', { callbackUrl: '/' })}>
          Login with spotify
        </button>
      )
    }
    return (
        <div>profile</div>
    )
  }

  return <Buttons />
}

export default AuthAndProfileButtons
