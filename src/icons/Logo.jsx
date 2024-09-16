import React from "react";

function Logo() {
  return (
    <div
      className="w-[50px] h-[50px] rounded-full flex items-center justify-center pb-0.5 hover:bg-gray-eff3f41a
   transition-colors duration-200 cursor-pointer"
    >
      <svg
        viewBox="0 0 24 24"
        weight={30}
        height={30}
        className="bg-transparent"
      >
        <path
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
}

export default Logo;
