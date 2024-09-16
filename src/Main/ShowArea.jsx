import React from "react";

const number = () => Math.floor(Math.random() * (199 - 50 + 1)) + 1;

function ShowArea() {
  return (
    <div className=" h-[50px] bg-black border-t border-b border-[#2f3336] flex items-center justify-center text-primary-dark -mt-1.5 cursor-pointer">
      Show {number()} posts
    </div>
  );
}

export default ShowArea;
