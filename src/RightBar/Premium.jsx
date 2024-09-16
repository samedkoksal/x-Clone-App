import React from "react";

function Premium() {
  return (
    <section className="bg-black rounded-2xl border border-[#34383f] py-3 px-4 flex flex-col gap-2.5 font-chirp ">
      <h6 className="text-[18px] leading-6 font-extrabold bg-transparent text-#ffffffe5">
        Subscribe to Premium
      </h6>
      <p className="leading-5 text-[15px] text-#ffffffe5">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <div>
        <button className="bg-primary-base rounded-full text-[15px] font-bold font-chirp h-9 text-ffffff w-[108px] hover:bg-primary-dark transition-color duration-200">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Premium;
