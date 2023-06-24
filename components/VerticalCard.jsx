import Image from "next/image";
import React from "react";
import VerticalCardImage from "../src/app/img/VerticalCardImage.png";
const VerticalCard = () => {
  return (
    <div class="flex w-[190px] h-[270px] flex-col justify-center items-center flex-shrink-0 bg-[#333333] p-[16px]">
      <Image src={VerticalCardImage} alt="card image" className="p-0 m-0" />
      <div>
        <h1 className="text-[#FFFFFF]">Hot Hits USA</h1>
        <h3 className="text-[#B3B3B3]">
          The hottest tracks in the United States
        </h3>
      </div>
    </div>
  );
};

export default VerticalCard;
