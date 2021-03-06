import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService"
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    const selectAllTweets = (reducers) => reducers.tweetsReducer.tweets;
    let tweets = useSelector(selectAllTweets);

    tweets = tweets.sort((a, b) => {
        if (a.posted && b.posted) {
            return b.posted.localeCompare(a.posted);
        }
        return 0;
    })

    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [dispatch])
    return (
        <ul className="list-group ">
            {tweets.map((tweet, i) => <TweetListItem tweet={tweet} key={i}/>)}
        </ul>
    )
};

export default TweetList;
