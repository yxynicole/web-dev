import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../../../services/twitterService"
import TweetListItem from "./TweetListItem";

const TweetList = () => {
    const selectAllTweets = (reducers) => reducers.tweetsReducer.tweets;
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(()=>fetchAllTweets(dispatch))
    return(
        <ul className="list-group ">
            { tweets.map(tweet => <TweetListItem tweet={tweet}/>) }
        </ul>
    )
};

export default TweetList;
