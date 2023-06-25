import React from "react";
import playlistHeaderImage from "../src/app/img/playlistHeaderImage.png";
import Image from "next/image";
import button from "../src/app/img/button.png";
import heart from "../src/app/img/heart.png";
import dots from "../src/app/img/dots.png";
const Playlist = () => {
  return (
    <div className="w-full h-full text-[#FFFFFF] bg-headerPlaylist-gradient">
      <header className="h-2/5  flex items-end p-4">
        <Image src={playlistHeaderImage} alt="img" className="w-auto h-52" />
        <div className="flex flex-col gap-3">
          <h6>Playlist</h6>
          <h1 className="text-7xl font-bold">Pop Right Now</h1>
          <p className="text-sm opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            <span className="text-bold">Spotify</span> -{" "}
            <span className="opacity-70">860305 likes</span> -{" "}
            <span className="opacity-70">100 songs</span>
          </p>
        </div>
      </header>
      <nav className="h-auto p-8 gap-x-4 box-border flex justify-start items-center">
        <Image src={button} alt="button" className="w-[55px] h-[55px] cursor-pointer" />
        <div className="flex p-3">
          <Image src={heart} alt="heart" className="w-[46px] h-[46px] cursor-pointer hover:bg-[#282828] transition duration-300 rounded" />
          <Image src={dots} alt="dots" className="w-[46px] h-[46px] cursor-pointer hover:bg-[#282828] transition duration-300 rounded" />
        </div>
      </nav>

      <main>

      </main>

    </div>
  );
};

export default Playlist;
