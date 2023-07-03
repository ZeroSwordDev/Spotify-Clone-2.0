import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchPlaylistDetails } from '../redux/PlayListDetailsSlice'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const PlayListCard = ({ Playlist }) => {
  const { data: session } = useSession()
  const dispatch = useDispatch()

  const image = Playlist.images[0]?.url // Obtén la URL de la primera imagen si existe

  return (
    <Link href={`/playlist/${Playlist.id}`}>
      <div
        onClick={() =>
          dispatch(fetchPlaylistDetails(Playlist.id, session.accessToken))
        }
        className='flex items-center p-2 space-x-2 space-y-2 h-10 w-36 text-gray-500 cursor-pointer'
      >
        {image && (
          <img
            src={image}
            width={50}
            height={30}
            alt=''
          />
        )}
        <p className='text-sm'>{Playlist.name}</p>
      </div>
    </Link>
  )
}

export default PlayListCard
