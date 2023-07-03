'use client'
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import ArtistImage from '../img/ArtistImage.png'
import playlistCardImage from '../img/playlistCardImage.png'
import Image from 'next/image'
const Search = () => {
  const [searchKey, setSearchKey] = useState('')

  return (
    <div className='flex flex-col gap-2 h-screen w-full bg-gradient box-border p-4 gap-y-5'>
      <header className='text-3xl flex flex-col items-start justify-start px-8'>
        <div className='relative flex'>
          <MagnifyingGlassIcon className='absolute  left-2 top-2 h-6 w-6 ' />
          <input className='rounded-full bg-[#333333] w-96 pl-12  text-base py-2 font-normal outline-1' />
        </div>
      </header>
      <main className='flex gap-5 '>
        <div className='w-1/3 flex flex-col gap-5'>
          <h2 className='font-bold text-4xl'>Resultado principal</h2>
          <section className='flex flex-col bg-[#333333] hover:bg-[#505050]w rounded-md w-full box-border p-5  gap-y-5'>
            <div className='flex flex-col justify-start  gap-y-5'>
              <Image
                src={ArtistImage}
                alt='artist image'
              />
              <h1 className='font-bold text-2xl'>Homer El Mero Mero</h1>
              <h3>Artista</h3>
            </div>
          </section>
        </div>

        <section className='w-2/3 '>
          <h2 className='font-bold text-4xl'>Canciones</h2>
          <div className='flex flex-col gap-2 box-border p-4  rounded-md'>
            <div className='w-full flex gap-2 justify-center items-center hover:bg-[#505050] box-border p-4 rounded-md'>
              <Image
                src={playlistCardImage}
                alt='song image'
                className='rounded-md'
              />
              <div className='flex flex-col flex-grow justify-start'>
                <h1>Es Épico</h1>
                <h3>Canserbero</h3>
              </div>
              <div>6:01</div>
            </div>
            <div className='w-full flex gap-2 justify-center items-center hover:bg-[#505050] box-border p-4 rounded-md'>
              <Image
                src={playlistCardImage}
                alt='song image'
                className='rounded-md'
              />
              <div className='flex flex-col flex-grow justify-start'>
                <h1>Es Épico</h1>
                <h3>Canserbero</h3>
              </div>
              <div>6:01</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Search
