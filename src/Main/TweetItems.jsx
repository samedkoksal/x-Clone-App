import React from "react";
import {
  TripleDots2,
  ReplyIcon,
  RepostIcon,
  LikeIcon,
  ViewIcon,
  BookmarkIcon,
  ShareIcon,
} from "../icons/icon";

function TweetItems({
  displayName,
  userName,
  content,
  avatar,
  image,
  timestamp,
}) {
  const formatTime = (timestamp) => {
    if (!timestamp) return "";

    const now = new Date();
    const tweetTime = timestamp.toDate();
    const differenceInSeconds = Math.floor((now - tweetTime) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds}s`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes}m`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours}h`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days}d`;
    }
  };

  return (
    <div className="flex flex-col">
      <article className="flex font-chirp tracking-tighter border-b border-[#2f3336] mt-1 -mb-1 cursor-pointer ">
        <img
          src={avatar}
          alt="Profile"
          className="w-10 h-10 rounded-full mt-3 ml-4 cursor-pointer "
        />

        <div className="flex flex-col w-full ml-2">
          <div className="flex items-center text-sm">
            <h4 className="font-bold cursor-pointer hover:underline ">
              {displayName}
            </h4>
            <span className="text-[#71767b] ml-1 ">{userName}</span>
            <div className="mx-[7px] bg-[#111111] h-[2px] w-[2px] border rounded-full" />
            <span className="text-[#71767b] text-sm hover:underline">
              {formatTime(timestamp)}
            </span>
            <div className="ml-auto cursor-pointer">
              <TripleDots2 />
            </div>
          </div>
          <p className=" text-sm text-[#e7e9ea] font-chirp">{content}</p>
          {image && <img src="{image}" className=" rounded-xl max-h-88" />}
          <div>
            <div className="flex mb-3 justify-around text-sm  ">
              <div className="flex rounded-full -ml-8 ">
                <ReplyIcon className="bg-transparent" />
                <span className="mt-3 ml-1  text-[#71767b] "></span>
              </div>
              <div className="flex rounded-full ">
                <RepostIcon className="bg-transparent" />
                <span className="mt-3 ml-1 mr-1  text-[#71767b] "></span>
              </div>
              <div className="flex rounded-full ">
                <LikeIcon className="bg-transparent" />
                <span className="mt-3 ml-1 mr-1  text-[#71767b] "></span>
              </div>

              <div className="flex rounded-full ">
                <ViewIcon className="bg-transparent" />
                <span className="mt-3 ml-1 mr-1  text-[#71767b] "></span>
              </div>
              <div className="flex">
                <BookmarkIcon />
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default TweetItems;
