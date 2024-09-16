import React from "react";
import seaPhoto from "../icons/Sea.jpg";
import { TripleDots } from "../icons/icon";

function ProfileBox() {
  return (
    <div className="flex items-center  rounded-full group px-3 mr-2 transform transition-colors duration-200 hover:bg-gray-eff3f41a cursor-pointer py-3">
      <img
        src={seaPhoto}
        alt="profilePhoto"
        className="w-10 h-10 rounded-full "
      />
      <div className="flex flex-row items-center w-full justify-between bg-transparent">
        <div className="flex flex-col bg-transparent">
          <p className="  ml-3 font-bold text-md bg-transparent ">
            Samed Köksal{" "}
          </p>
          <p className="ml-3 text-md text-gray-tw tracking-tight -mt-0.5 bg-transparent">
            @SamedKoksal10
          </p>
        </div>
        <div className="group-hover:bg-transparent ">
          <TripleDots />
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
