import Image from "next/image";
import React from "react";
import VerticalCardImage from "../src/app/img/VerticalCardImage.png";
const VerticalCardRecent = ({recently}) => {

  const image = recently.track.album.images[0]?.url
  return (
    <div className="flex w-[190px] h-[270px] space-y-3 cursor-pointer flex-col justify-center rounded-xl items-center flex-shrink-0 bg-[#333333] p-[16px]">
      <img src={image} alt="card image" width={150} height={150} className="p-0 m-0" />
      <div>
        <h1 className="text-[#FFFFFF]">{recently.track?.name}</h1>
        <h3 className="text-[#B3B3B3]">
          {recently.track?.type}
        </h3>
      </div>
    </div>
  );
};

export default VerticalCardRecent;