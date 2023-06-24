import Head from "next/head";
import Sidebar from "../../components/Sidebar.jsx";
import Image from "next/image";
import Player from "../../components/Player.jsx";
import Main from "../../components/Main.jsx";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <title> Spotify 2.0</title>
      <main className="h-screen flex">
        <Sidebar />
        <Main />
        <Player />
      </main>
    </div>
  );
}
