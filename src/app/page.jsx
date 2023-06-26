"use client";

import Sidebar from "../../components/Sidebar.jsx";
import Player from "../../components/Player.jsx";
import { useSession } from "next-auth/react";
import Main from "../../components/Main.jsx";
import Playlist from "../../components/Playlist.jsx";

export default function Home() {
  const { data: session , status} = useSession();
  return (
    <div className='h-full w-screen'>
      <title> Spotify 2.0</title>
      <main className=" flex h-screen">
        {/* center */}
       
        <Sidebar />
        <Main/>
       {/*  <Playlist/> */}
       
        <Player />
      </main>
    </div>
  );
}
