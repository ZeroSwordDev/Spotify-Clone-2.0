import React, { useContext } from "react";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
import { ReleaseContext } from "../context/NewReleases";
import VerticalCardRecent from "./VerticalCardRecent";

const Main = () => {
  const { newRelease, recentTracks , featuredPlayList } = useContext(ReleaseContext);

  return (
    <div className="w-full h-screen pb-80 flex flex-col box-border p-4 bg-gradient gap-3 ">
      <h1 className="text-[#FFFFFF] font-bold text-2xl">Good afternoon</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        {featuredPlayList?.map(item => (
          <HorizontalCard  key={item.id} featured={item}/>
          
        ))}
      </div>
      <h1 className="text-[#FFFFFF] font-bold text-2xl">Recent Played</h1>
      <div className="flex gap-x-5">
        {recentTracks?.map((item) => (
          <VerticalCardRecent key={item.id} recently={item} />
        ))}
      </div>
      <h1 className="text-[#FFFFFF] font-bold text-2xl">Just the Hits</h1>
      <div className="flex gap-x-5">
        {newRelease?.map((item) => (
          <VerticalCard key={item.id} release={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
