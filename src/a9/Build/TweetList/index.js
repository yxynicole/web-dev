import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService"
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    const selectAllTweets = (reducers) => reducers.tweetsReducer.tweets;
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [dispatch])
    return (
        <ul className="list-group ">
            {tweets.map((tweet, i) => <TweetListItem tweet={tweet} key={i}/>)}
        </ul>
    )
};

export default TweetList;
