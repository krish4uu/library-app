import React from "react";
import { IoIosSearch } from "react-icons/io";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex">
      <form className="flex gap-2 md:gap-6 mt-4 max-w-full overflow-hidden md:w-full">
        <button className="rotate-45" type="submit">
          <IoIosSearch
            size={`2rem`}
            fill="lightgray"
            className="rotate-45"
            onClick={(e) => e.preventDefault()}
          />
        </button>
        <input type="text" size={70} placeholder="Search through your notes" />
      </form>
    </div>
  );
};
