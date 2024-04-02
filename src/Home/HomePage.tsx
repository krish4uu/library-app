import React from "react";
import { List } from "../ListItems/List";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomePageSvg } from "../Utilities/HomePageSvg";

const HomePage: React.FC = () => {
  return (
    <div className="container flex max-w-full p-0 place-content-center">
      <div className="w-screen md:w-auto p-2 pl-6 pr-6 md:p-4">
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
