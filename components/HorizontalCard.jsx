import React, { useContext } from "react";
import playlistCardImage from "../src/app/img/playlistCardImage.png";
import Image from "next/image";
const HorizontalCard = ({featured}) => {

  const image = featured.images[0]?.url
  return (
    <div className="w-[300px] 2xl:w-[530px] h-[50px]  bg-[#181818] flex  rounded-[7px] justify-start items-center ">
      <img
        src={image}
        className="w-[100px] h-full rounded-sm object-cover"
        alt=""
      />
      <div className="text-white text-[16px] font-bold p-4">{featured.name}</div>
    </div>
  );
};

export default HorizontalCard;
