import React from "react";
import Elon from "../icons/Elon.jpg";

function Live() {
  return (
    <section className="bg-black rounded-2xl border border-[#34383f] py-3 px-4 flex flex-col gap-2.5 font-chirp">
      <p className=" font-extrabold text-lg -mt-1 text-ffffff ">Live on X</p>

      <div className="mt-2 flex flex-col justify-between font-chirp  text-ffffff">
        <div className="flex ">
          <img src={Elon} alt="Musk" className="size-4 rounded-full mt-1" />
          <p className="ml-1 font-extrabold "> Elon Musk </p>
          <p className="ml-1 text-sm mt-1 text-[#71767b]">is hosting</p>
        </div>
        <p className="font-extrabold mt-1">Cybertruck Introduction</p>
      </div>
    </section>
  );
}

export default Live;
