import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet}  from "../../services/twitterService";


const Header = () => {
    return (
        <div className="col-12 wd-header">
            <div className ="col-1 col-md-1 col-lg-1 col-xl-1">
                Home
            </div>

        </div>
    )
}
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        // const action = {
        //     type: 'create-tweet',
        //     tweet:whatsHappening
        // };
        // dispatch(action);
        postNewTweet(dispatch,{
            tweet: whatsHappening
        });
    }

    return(
        <>
            <Header/>
            <div className="container wd-boarder-parallel">
                <div className="row ">
                    <div className="col-2">
                        <img src = {require("./hedwig.jpg").default} alt = "" className = "img-fluid wd-avatar-image"/>
                    </div>
                    <div className="col-10">
                        <textarea className="wd-text-area" placeholder={"What's happening?"} value={whatsHappening} onChange={e => setWhatsHappening(e.target.value)} />
                    </div>
                </div>

                <div className="row wd-tweet-button-padding">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        <i className="fas fa-file-image wd-twitter-blue"/>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-film wd-twitter-blue"/>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-poll-h wd-twitter-blue"/>&nbsp;&nbsp;&nbsp;
                        <i className="fas fa-smile-beam wd-twitter-blue"/>&nbsp;&nbsp;&nbsp;
                        <i className="far fa-calendar-check wd-twitter-blue"/>
                    </div>
                    <div className="col-2">
                        <button className="btn wd-buttons" onClick={tweetClickHandler}>Tweet</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default WhatsHappening
