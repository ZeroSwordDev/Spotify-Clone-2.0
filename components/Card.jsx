import React from "react";
import playlistCardImage from "../src/app/img/playlistCardImage.png";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-[343px] h-[84px] flex rounded">
      <Image src={playlistCardImage} className="w-[84px] h-[84px]" />
      <div className="text-white text-[16px] font-bold">Pop Right Now</div>
    </div>
  );
};

export default Card;
