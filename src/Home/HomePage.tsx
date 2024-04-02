import React from "react";
import { List } from "../ListItems/List";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomePageSvg } from "../Utilities/HomePageSvg";

const HomePage: React.FC = () => {
  return (
    <div className="container flex place-content-center max-w-full ">
      <div>
        <div>
          <Header />
          <SearchBar />
        </div>
        <div className="flex gap-6 mt-2 pt-2 relative">
          <HomePageSvg />
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
