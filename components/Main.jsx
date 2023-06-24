import React from "react";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";

const Main = () => {
  return (
    <div className="w-full h-full flex flex-col box-border p-4 bg-gradient">
      <h1>Good afternoon</h1>
      <HorizontalCard />
      <VerticalCard />
    </div>
  );
};

export default Main;
