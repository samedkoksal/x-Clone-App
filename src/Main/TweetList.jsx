import React from "react";
import TweetItems from "./TweetItems";

function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <TweetItems {...tweet} key={index} />
      ))}
    </div>
  );
}

export default TweetList;
