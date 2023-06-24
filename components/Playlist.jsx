import React from "react";
import playlistHeaderImage from "../src/app/img/playlistHeaderImage.png";
import Image from "next/image";
const Playlist = () => {
  return (
    <div className="w-full h-full text-[#FFFFFF]">
      <header className="h-2/5 bg-headerPlaylist-gradient flex items-end p-4">
        <Image src={playlistHeaderImage} alt="img" className="w-auto h-52"/>
        <div className="flex flex-col gap-3">
          <h6>Playlist</h6>
          <h1 className="text-7xl font-bold">Pop Right Now</h1>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            <span className="text-bold">Spotify</span> - <span className="opacity-70">860305 likes</span> -{" "}
            <span className="opacity-70">100 songs</span>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Playlist;
