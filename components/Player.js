import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdSkipNext } from "react-icons/md";
import {  BsRepeat } from "react-icons/bs"
import { BiShuffle } from "react-icons/bi";

const Player = () => {
  return (
    <div
      style={{ height: 80, width: "100%" }}
      className="  text-white bg-[#181818]"
    >
      {/* Player */}

      <div className="flex p-2 justify-between h-80 w-screen">
        {/* Container */}
        <div className="">{/* left */}</div>
        <div className="flex flex-col items-center space-y-2  h-[100%] w-[700px]">
          {/* Center */}
          <div className="flex items-center gap-3">
            <BiShuffle  cursor={"pointer"} size={15}/>
            <MdSkipNext
              size={25}
              cursor={"pointer"}
              style={{ transform: "rotate(180deg)" }}
            />
            <AiFillPlayCircle cursor={"pointer"} size={35} />
            <MdSkipNext cursor={"pointer"} size={25} />
            <BsRepeat cursor={"pointer"} size={15}/>
          </div>
          <div className=" flex justify-between items-center  w-full h-5">
            <span className="text-xs">00:00</span>
            <input type="range" className=" w-[600px] h-5 " />
            <span className="text-xs">03:25</span>
          </div>
        </div>
        <div className="">{/* right */}</div>
      </div>
    </div>
  );
};

export default Player;
