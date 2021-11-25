import React from "react";
import TweetStats from "./TweetStats";
import {useDispatch} from "react-redux";
import {deleteTweet} from "../../services/twitterService";

const TweetListItem = ({tweet}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, tweet);
    }

    return (
        <li className="list-group-item wd-dark-background">

            <table>
                <tbody>
                <tr>
                    <td className="align-text-top">
                        <img alt="" className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']}/>
                    </td>

                    <td className="ps-3" style={{width: '100%'}}>

                        <span className="fw-bold">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"/>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>
                        <i onClick={deleteTweetClickHandler}
                           className="fas fa-times wd-delete-tweet-icon-color"/>

                        <div>
                            {tweet.tweet}
                        </div>

                        {
                            tweet.attachments && tweet.attachments.image &&
                            <img alt="" src={tweet.attachments.image}
                                 className="mt-2 wd-border-radius-20px"
                                 style={{width: "100%"}}/>
                        }

                        {
                            tweet.attachments && tweet.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px"
                                    style={{width: "100%"}}
                                    src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen/>
                        }
                        <TweetStats tweet={tweet}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TweetListItem;