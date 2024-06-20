import React from "react";
import { Search } from "./Search";
import { LeftScroll } from "./LeftScroll";
import { MainContent } from "./MainContent";

export const Youtube = () => {
  return (
    <>
      <div className="d-flex flex-row overflow-x-hidden justify-content-around  ">
        <div className="">
          <LeftScroll />
        </div>
        <div className="">
          <Search />
          <MainContent/>
        </div>
      </div>
    </>
  );
};
