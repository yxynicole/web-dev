import React from "react";
import tweets from "./tweets.json";
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                               <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;


