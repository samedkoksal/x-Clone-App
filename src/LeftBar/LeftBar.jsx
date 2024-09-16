import React from "react";
import Logo from "../icons/Logo";
import LeftBarMenu from "./LeftBarMenu";

function LeftBar() {
  return (
    <div
      className="w-[267px] h-screen
  flex flex-col justify-between mt-1 ml-2 sticky top-0"
    >
      <div>
        <Logo />
        <div className="-mt-1.5">
          <LeftBarMenu />
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
