"use client";

import Head from "next/head";
import Sidebar from "../../components/Sidebar.jsx";
import Image from "next/image";
import Player from "../../components/Player.jsx";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session , status} = useSession();
  console.log(session , status);
  return (
    <div className="h-screen w-screen">
      <title> Spotify 2.0</title>
      <main className="h-screen">
        <Sidebar />
        {/* center */}

        <Player />
      </main>
    </div>
  );
}
