/* eslint-disable react/prop-types */
import Image from 'next/image'
import React from 'react'
import more from '../src/app/img/more.png'
import { useDispatch } from 'react-redux'
import { playSong } from '../redux/PlayerSlice'
import { useSession } from 'next-auth/react'
const SongCard = ({ TrackPlaylist }) => {
  const { data: session } = useSession()
  const dispatch = useDispatch()

  function formatMinutes(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  const handlePlaySong = () => {
    dispatch(playSong(session?.accessToken,TrackPlaylist ))
  }
  return (
    <div
      className='w-full flex box-border px-10 hover:bg-[#505050] justify-between items-center rounded-md cursor-pointer '
      onClick={handlePlaySong}
    >
      <div className='flex w-64 space-x-3'>
        <img
          src={TrackPlaylist?.track.album.images[0]?.url}
          alt=''
          width={60}
          height={60}
        />
        <div className='flex flex-col'>
          <span>{TrackPlaylist?.track.name}</span>
          <span className='text-sm opacity-70'>
            {TrackPlaylist?.track.artists[0]?.name}
          </span>
        </div>
      </div>
      <span className='w-64'>{TrackPlaylist?.track.album.name}</span>
      <span className='w-64 opacity-70'>
        {TrackPlaylist?.track.album.release_date}
      </span>
      <div className='flex w-10 '>
        <span className='opacity-70'>
          {formatMinutes(TrackPlaylist?.track.duration_ms)}
        </span>
        <Image
          src={more}
          alt=''
        />
      </div>
    </div>
  )
}

export default SongCard
