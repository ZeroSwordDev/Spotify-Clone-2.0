import Image from "next/image";
import React from "react";
import more from "../src/app/img/more.png"
import playlistCardImage from "../src/app/img/playlistCardImage2.png"
const SongCard = () => {
  return (
    <div className="w-full flex box-border px-10 hover:bg-[#333333] justify-between items-center rounded-md ">
      <span className="w-5 ">1</span>
      <div className="flex w-64">
        <Image src={playlistCardImage} alt="" />
        <div className="flex flex-col">
          <span>We’re Good</span>
          <span className="text-sm opacity-70">Dua Lipa</span>
        </div>
      </div>
      <span className="w-64">Future Nostalgia (The Moonlight Edition)</span>
      <span className="w-64 opacity-70">12-04-23</span>
      <div className="flex w-10 ">
        <span className="opacity-70">2:45</span>
        <Image src={more}alt="" />
      </div>
    </div>
  );
};

export default SongCard;
