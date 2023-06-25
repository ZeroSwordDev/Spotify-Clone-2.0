import Image from "next/image";
import React from "react";
import VerticalCardImage from "../src/app/img/VerticalCardImage.png";
const VerticalCard = ({release}) => {

  const image = release?.images[0].url
  return (
    <div className="flex w-[190px] h-[270px] cursor-pointer flex-col justify-center rounded-xl items-center flex-shrink-0 bg-[#333333] p-[16px]">
      <img src={image} alt="card image" width={150} height={150} className="p-0 m-0" />
      <div>
        <h1 className="text-[#FFFFFF]">{release?.name}</h1>
        <h3 className="text-[#B3B3B3]">
          {release?.type}
        </h3>
      </div>
    </div>
  );
};

export default VerticalCard;
