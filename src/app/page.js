import Head from "next/head";
import Sidebar from "../../components/Sidebar";
import Image from "next/image";
import Player from "../../components/Player";


export default function Home() {
  return (
    <div className="h-screen w-screen">
      <title> Spotify 2.0</title>
      <main className="h-screen">
        <Sidebar />
        {/* center */}

        <Player/>
      </main>
    </div>
  );
}
