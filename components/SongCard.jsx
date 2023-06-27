import Image from "next/image";
import React from "react";
import more from "../src/app/img/more.png";

const SongCard = ({ TrakcPlayList }) => {
  function formatMinutes(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }

  return (
    <div className="w-full flex box-border px-10 hover:bg-[#333333] justify-between items-center rounded-md ">
      <div className="flex w-64 space-x-3">
        <img
          src={TrakcPlayList?.track.album.images[0]?.url}
          alt=""
          width={60}
          height={60}
        />
        <div className="flex flex-col">
          <span>{TrakcPlayList?.track.name}</span>
          <span className="text-sm opacity-70">
            {TrakcPlayList?.track.artists[0]?.name}
          </span>
        </div>
      </div>
      <span className="w-64">{TrakcPlayList?.track.album.name}</span>
      <span className="w-64 opacity-70">
        {TrakcPlayList?.track.album.release_date}
      </span>
      <div className="flex w-10 ">
        <span className="opacity-70">
          {formatMinutes(TrakcPlayList?.track.duration_ms)}
        </span>
        <Image src={more} alt="" />
      </div>
    </div>
  );
};

export default SongCard;
