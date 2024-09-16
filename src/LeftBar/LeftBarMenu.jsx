import React from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  GrokIcon,
  BookmarksIcon,
  CommunitiesIcon,
  PremiumIcon,
  OrgsIcon,
  ProfileIcon,
} from "../icons/icon";
import ProfileBox from "./ProfileBox";
import MorePop from "./MorePop";

const menuItems = [
  { name: "Explore", path: "/explore", Icon: ExploreIcon },
  { name: "Notifications", path: "/notifications", Icon: NotificationIcon },
  { name: "Messages", path: "/messages", Icon: MessagesIcon },
  { name: "Grok", path: "/grok", Icon: GrokIcon },
  { name: "Bookmarks", path: "/bookmarks", Icon: BookmarksIcon },
  { name: "Communities", path: "/communities", Icon: CommunitiesIcon },
  { name: "Premium", path: "/premium", Icon: PremiumIcon },
  { name: "Orgs", path: "/orgs", Icon: OrgsIcon },
  { name: "Profile", path: "/profile", Icon: ProfileIcon },
  /*   { name: "More", path: "/more", Icon: MoreIcon }, */
];
function LeftBarMenu() {
  const handleClick = (path) => {
    window.history.pushState({}, "", path);
  };

  return (
    <div className="mt-1.5">
      <div
        className="mt-1 mb-2.5 py-1 block cursor-pointer group "
        onClick={() => handleClick("/home")}
      >
        <div className="inline-flex rounded-full pr-7 items-center p-3 group-hover:bg-gray-eff3f41a ">
          <HomeIcon />
        </div>
      </div>
      <div className="-mt-2.5 mb-2.5 ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="py-[3px] block cursor-pointer group "
            onClick={() => handleClick(item.path)}
          >
            <div className="inline-flex rounded-full pr-7 items-center p-3 group-hover:bg-gray-eff3f41a ">
              <item.Icon />
            </div>
          </div>
        ))}
        <div>
          <div className="py-[3px] block cursor-pointer group ">
            <div className="inline-flex rounded-full pr-7 items-center p-3 group-hover:bg-gray-eff3f41a ">
              <MorePop className="bg-transparent" />
            </div>
          </div>
        </div>
        <div className="-mt-2 flex items-center justify-center py-21 cursor-pointer group mb-10 ">
          <button className="inline-flex items-center p-3 mr-35 pr-97 pl-97 font-bold text-lg tracking-wide rounded-full bg-primary-base text-ffffffe5 group-hover:bg-primary-dark transition-colors duration-200 ">
            Post
          </button>
        </div>
      </div>
      <ProfileBox />
    </div>
  );
}

export default LeftBarMenu;
