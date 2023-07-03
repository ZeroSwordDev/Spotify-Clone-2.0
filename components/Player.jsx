import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  AiFillPlayCircle,
  AiOutlineHeart,
  AiOutlineUnorderedList,
  AiTwotoneSound,
} from 'react-icons/ai'
import { MdSkipNext } from 'react-icons/md'
import { BsRepeat, BsFillPipFill } from 'react-icons/bs'
import { BiShuffle, BiDevices } from 'react-icons/bi'
import LogoArtista from '../src/app/img/logoArtista.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaybackState } from '../redux/PlayerSlice'
import { useSession } from 'next-auth/react'

const Player = () => {
  const { data: session, status } = useSession()
  const dispatch = useDispatch()
  const playback = useSelector(state => state.playback)
  useEffect(() => {
    console.log(session)
    if (status === 'authenticated' && session?.accessToken) {
      dispatch(getPlaybackState(session?.accessToken))
    }
  }, [status])
  console.log(playback)
  return (
    <div className='  text-white bg-[#181818] w-full h-[calc(100vh-92vh)] fixed bottom-0 '>
      {/* Player */}

      <div className='flex p-2 justify-between h-80 w-screen'>
        {/* Container */}
        <div className='flex items-center  justify-between w-[250px] h-16 gap-3 '>
          {/* left */}
          <div className=''>
            <Image
              src={LogoArtista}
              alt=''
              width={60}
              height={60}
            />
          </div>
          <div className='flex flex-col w-36'>
            <h3 className=' font-medium text-sm '>Hold On</h3>
            <p className=' font-thin text-sm '>Justin Bieber</p>
          </div>
          <div className='flex gap-4'>
            <AiOutlineHeart
              className='text-gray-500 hover:text-white'
              cursor={'pointer'}
              size={20}
            />
            <BsFillPipFill
              className='text-gray-500 hover:text-white'
              cursor={'pointer'}
              size={20}
            />
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2  h-[100%] w-[700px]'>
          {/* Center */}
          <div className='flex items-center gap-3'>
            <BiShuffle
              cursor={'pointer'}
              size={15}
            />
            <MdSkipNext
              size={25}
              cursor={'pointer'}
              style={{ transform: 'rotate(180deg)' }}
            />
            <AiFillPlayCircle
              cursor={'pointer'}
              size={35}
            />
            <MdSkipNext
              cursor={'pointer'}
              size={25}
            />
            <BsRepeat
              cursor={'pointer'}
              size={15}
            />
          </div>
          <div className=' flex justify-between items-center  w-full h-5   '>
            <span className='text-xs'>00:00</span>
            <input
              type='range'
              className=' w-[600px] h-1 '
            />
            <span className='text-xs'>03:25</span>
          </div>
        </div>
        <div className='flex justify-end items-center w-[300px] gap-3 h-16 pr-2'>
          {/* right */}
          <AiOutlineUnorderedList
            className='text-gray-500 hover:text-white'
            cursor={'pointer'}
            size={15}
          />
          <BiDevices
            className='text-gray-500 hover:text-white'
            cursor={'pointer'}
            size={15}
          />
          <AiTwotoneSound
            className='text-gray-500 hover:text-white'
            cursor={'pointer'}
            size={15}
          />
          <input
            type='range'
            className='w-16 h-1'
          />
        </div>
      </div>
    </div>
  )
}

export default Player
