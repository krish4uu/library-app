import React from "react";
import { IoMdAddCircle } from "react-icons/io";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between mt-14 pt-2">
      <div className="flex gap-6">
        <span className="p-4 invisible"></span>
        <header className="flex text-4xl font-semibold">
          <h1>Notes</h1>
        </header>
      </div>
      <button>
        <IoMdAddCircle size={`3rem`} fill="lightgreen" />
      </button>
    </div>
  );
};

