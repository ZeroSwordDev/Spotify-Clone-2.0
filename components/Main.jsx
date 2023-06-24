import React from "react";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";

const Main = () => {
  return (
    <div className="w-full h-screen pb-80 flex flex-col box-border p-4 bg-gradient gap-3">
      <h1 className="text-[#FFFFFF] font-bold text-3xl">Good afternoon</h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
      <h1 className="text-[#FFFFFF] font-bold text-3xl">Recent Played</h1>
      <div className="flex gap-x-5">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />

      </div>
      <h1 className="text-[#FFFFFF] font-bold text-3xl">Just the Hits</h1>
      <div className="flex gap-x-5">
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />
        <VerticalCard />

      </div>
    </div>
  );
};

export default Main;
