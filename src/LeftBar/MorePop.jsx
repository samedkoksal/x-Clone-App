import React from "react";
import { Popover } from "@headlessui/react";
import {
  AdsIcon,
  FollowerIcon,
  ListIcon,
  MonetizationIcon,
  JobsIcon,
  SpaceIcon,
  SettingsIcon,
} from "../icons/icon";

function MorePop() {
  return (
    <Popover className="bg-transparent relative">
      <Popover.Button className="focus:outline-none ">
        <div className="rounded-full items-center flex gap-5 text-xl tracking-wide font-chirp bg-transparent">
          <svg
            viewBox="0 0 24 24"
            width={26.25}
            height={26.25}
            className="bg-transparent "
          >
            <path
              d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              fill="#b6b7b6"
              className="bg-transparent hover:bg-transparent"
            />
          </svg>
          More
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[318px] absolute -bottom-3 -left-5 bg-black shadow-box rounded-xl ">
        <ListIcon />
        <MonetizationIcon />
        <FollowerIcon />
        <AdsIcon />
        <JobsIcon />
        <SpaceIcon />
        <SettingsIcon />
      </Popover.Panel>
    </Popover>
  );
}

export default MorePop;
