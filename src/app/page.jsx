import React from 'react'
import Sidebar from '../../components/Sidebar.jsx'
import Player from '../../components/Player.jsx'
import Playlist from '../../components/Playlist.jsx'
import Main from '../../components/Main.jsx'

export default function Home () {
  return (
    <div className='h-full w-screen'>
      <title> Spotify 2.0</title>
      <main className='h-full flex'>
        <Sidebar />
        {/* <Main /> */}

        <Playlist />
        <Player />
      </main>
    </div>
  )
}
