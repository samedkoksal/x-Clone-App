import React from "react";
import SearchIcon, { PremiumIcon } from "../icons/icon";
import Premium from "./Premium";
import Live from "./Live";
import Trends from "./Trends";

function RightBar() {
  return (
    <aside className="w-[350px]">
      <div className="h-[44px] rounded-full items-center flex bg-[#202327] mt-[5px] px-[12px] w-full border border-transparent focus-within:bg-black focus-within:border-primary-base group mb-4">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full font-chirp ml-3 placeholder:text-[15px] placeholder:text-[#71767b] focus:outline-none"
        />
      </div>
      <Premium />
      <div className="mt-4">
        <Live />
      </div>
      <div className="mt-4">
        <Trends />
      </div>
    </aside>
  );
}

export default RightBar;
