import React, { useRef, useState } from "react";
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PullIcon,
  ScheduleIcon,
  WorldIcon,
} from "../icons/icon";
import dataBase from "../Auth/Firebase";
import Avatar from "../icons/Sea.jpg";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Tweet() {
  const textareaRef = useRef(null);
  const [text, setText] = useState("");

  const sendPost = async () => {
    if (text !== "") {
      try {
        await addDoc(collection(dataBase, "Tweet"), {
          displayName: "Samed Köksal",
          userName: "@SamedKoksal10",
          content: text,
          timestamp: serverTimestamp(),
          avatar: Avatar,
        });
        setText("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(e.target.value);
  };

  return (
    <div className="w-full flex flex-col mt-2">
      <textarea
        ref={textareaRef}
        placeholder="What is happening?!"
        value={text}
        onInput={handleInput}
        className="w-full text-xl placeholder-[#71767b] focus:outline-none -ml-2 -mt-[2px] font-chirp overflow-hidden resize-none"
      />
      <div className="bg-transparent -ml-1 -mt-1 flex flex-col items-start ">
        <WorldIcon />
        <div className="mt-3.5 -ml-3 h-[1px] bg-[#2f3336] w-full"></div>
      </div>
      <div className="ml-1 mt-3 flex  items-center justify-between ">
        <div className="flex ">
          <MediaIcon />
          <GifIcon />
          <PullIcon />
          <EmojiIcon />
          <ScheduleIcon />
          <LocationIcon />
        </div>
        <button
          className="bg-primary-base -mt-0.5 rounded-full px-[18px] py-[6px] font-medium text-[#FFF]"
          onClick={sendPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default Tweet;
