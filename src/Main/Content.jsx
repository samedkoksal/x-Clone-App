import React, { useState, useEffect } from "react";
import dataBase from "../Auth/Firebase";
import seaPhoto from "../icons/Sea.jpg";
import Tweet from "./Tweet";
import ShowArea from "./ShowArea";
import TweetList from "./TweetList";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Content() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetCollectionRef = collection(dataBase, "Tweet");
    const tweetQuery = query(tweetCollectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(tweetQuery, (snapshot) => {
      setTweets(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); // doc id'yi ekliyoruz
    });

    return () => unsubscribe();
  }, []);

  console.log(tweets);

  return (
    <div className="w-[600px] border-x border-[#2f3336]">
      <header className="flex flex-row items-center justify-around h-[54px] sticky top-0 z-10 bg-black/[.80] hover:bg-[#2f3336] cursor-pointer">
        <div className="relative flex items-center bg-transparent ">
          <a className="relative px-4 text-sm font-extrabold font-chirp bg-transparent">
            For you
          </a>
          <div className="absolute bottom-[-18px] left-0 h-[5px] rounded-full ml-4 cursor-pointer bg-blue-500 w-[56px] max-w-[calc(100%)] " />
        </div>
        <div className="absolute bottom-[-1px] left-0 h-[1px] bg-[#2f3336] w-full max-w-[calc(100%)] " />
      </header>
      <div className="flex space-x-4 px-4 py-4">
        <img
          src={seaPhoto}
          alt="profilePhoto"
          className="w-10 h-10 rounded-full cursor-pointer "
        />
        <Tweet />
      </div>
      <ShowArea tweets={tweets} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Content;
