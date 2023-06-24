import Head from "next/head";
import Sidebar from "../../components/Sidebar.jsx";
import Image from "next/image";
import Player from "../../components/Player.jsx";
import Main from "../../components/Main.jsx";
import Playlist from "../../components/Playlist.jsx";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <title> Spotify 2.0</title>
      <main className="h-full flex">
        <Sidebar />
        {/* <Main /> */}

        <Playlist />
        <Player />
      </main>
    </div>
  );
}
