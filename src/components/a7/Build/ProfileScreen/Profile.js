import React from "react";
import {useDispatch, useSelector} from "react-redux";
import EditProfile from "./EditProfile";
import {Link} from "react-router-dom";

const Header = (prop) => {
    return (
        <div className="row">
            <div className ="col-1 col-md-1 col-lg-1 col-xl-1">
                <i className="fas fa-arrow-left"/>
            </div>

            <div className ="col-11 col-md-11 col-lg-1 col-xl-11">
                <div>
                    {prop.userName}
                </div>
                <div>
                    {prop.tweetsCount}
                </div>
            </div>
        </div>
    )
}


const BasicInfo = (prop) => {
    return (
        <div className="row">
            <div className="col-12">
                <div>{prop.userName}</div>
                <div>@{prop.handle}</div>
            </div>

            <div className="col-12">{prop.bio}</div>

            <div className="col-12">
                <span className="col"><i className="fas fa-map-marker-alt"/> {prop.location}</span>
                <span className="col"><i className="fas fa-link"/> {prop.website}</span>
                <span className="col"><i className="fas fa-calendar-alt"/>Joined {prop.dateJoined}</span>

            </div>

            <div className="col-12">
                <span className ="col-2">{prop.followingCount + " Following"}</span>
                <span className ="col-2">{prop.followersCount + " Followers"}</span>
            </div>

        </div>)
}


const Profile = (prop) =>{
    let userInfo = prop.userInfo;

    return(
        <div className = "container">
            <Header {...userInfo}/>

            <div className="row">
                <img src = {require("" + userInfo.bannerPicture).default} alt = "user's banner"   className = "img-fluid"/>
            </div>


            <div className="col-12">
                <img src = {require("" + userInfo.profilePicture).default} alt = "user'avatar"   className = "img-fluid"/>
                <button className="btn btn-primary" onClick={prop.editProfileHandler} >Edit Profile</button>
            </div>

            <BasicInfo {...userInfo}/>

        </div>
    )
}
export default Profile
