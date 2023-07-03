import React from 'react'
import AuthAndProfileButtons from './AuthButton'

const Navbar = () => {
  return (
    <nav className='w-full h-[4rem] flex justify-end items-center px-5'>
      <AuthAndProfileButtons/>
    </nav>
  )
}

export default Navbar
