import React from "react";
import playlistCardImage from "../src/app/img/playlistCardImage.png";
import Image from "next/image";
const HorizontalCard = () => {
  return (
    <div  className="w-[300px] 2xl:w-[380px] h-[84px] bg-[#333333] flex rounded-sm justify-start items-center ">
      <Image src={playlistCardImage} className="w-[84px] h-[84px] rounded-sm" />
      <div className="text-white text-[16px] font-bold p-4">Pop Right Now</div>
    </div>
  );
};

export default HorizontalCard;
