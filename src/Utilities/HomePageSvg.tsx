import React from "react";
import { GiQuillInk } from "react-icons/gi";

export const HomePageSvg: React.FC = () => {
  return (
    <div className="absolute -left-2 -bottom-80 -z-10 lg:-left-60 lg:-bottom-20 max-w-40 md:w-full">
      <GiQuillInk size={`14rem`} fill="lightgray" className="max-w-40 md:max-w-56"/>
    </div>
  );
};
