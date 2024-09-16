import React from "react";
import { topics } from "../utilities/Desc";
import Topics from "./Topics";
import { Link } from "react-router-dom";

function Trends() {
  return (
    <section className="bg-black overflow-hidden rounded-2xl py-3 px-4 border border-[#34383f] ">
      <h5 className="text-xl font-extrabold flex items-center leading-6 text-white">
        What's happening
      </h5>
      <div className="flex flex-col w-full ">
        {topics.map((topics, index) => (
          <Topics item={topics} key={index} />
        ))}
        <Link
          to="/"
          className="h-[46px] w-full py-4 px-4  hover:bg-white/[0.03]"
        >
          Show more
        </Link>
      </div>
    </section>
  );
}

export default Trends;
