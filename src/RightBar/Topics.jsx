import React from "react";
import { Link } from "react-router-dom";
import { numFormat } from "../utilities/NumFormat";
import { TripleDots2 } from "../icons/icon";

function Topics({ item }) {
  return (
    <Link to="/" className="py-3 px-4 transition-colors hover:bg-white/[0.03]">
      <div className="text-[13px] leading-4 text-[#71767b] font-chirp bg-transparent ">
        {item.title}
      </div>
      <div className="text-[15px] font-bold leading-5 mt-0.5 bg-transparent">
        {item.topic.type === "#" && "#"}
        {item.topic.key}
      </div>
      {item?.postCount && (
        <div className="text-[13px] text-[#71767b] mt-1 leading-4 bg-transparent">
          {numFormat(item.postCount)} posts
        </div>
      )}
      <button className="w-[580px] h-[30px] rounded-full absolute  flex -mt-16  items-center justify-center  transition-colors hover:fill-primary-base">
        <TripleDots2 />
      </button>
    </Link>
  );
}

export default Topics;
