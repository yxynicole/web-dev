import React from "react";

const Header = (prop) => {
    return (
        <div className="row wd-dark-background">
            <div className="col-1 wd-icon-padding-top">
                <i className="fa fa-arrow-left"/>
            </div>

            <div className="col-11">
                <div className="wd-username-in-header">
                    {prop.userName}
                </div>
                <div className="wd-tweets-count-in-header">
                    {prop.tweetsCount} Tweets
                </div>
            </div>
        </div>
    )
}

const BasicInfo = (prop) => {
    return (
        <div className="row wd-dark-background">
            <div className="col-12 wd-row-padding-basic-info">
                <div>{prop.userName}</div>
                <div className="wd-grey-text">@{prop.handle}</div>
            </div>

            <div className="col-12 wd-row-padding-basic-info">{prop.bio}</div>
            <div className="col-12 wd-row-padding-basic-info">
                <span className="col wd-grey-text"><i
                    className="fas fa-map-marker-alt"/> {prop.location}</span>
                <span className="col wd-grey-text"><i className="fas fa-link"/></span> <a
                href="./">{prop.website}</a>
                <span className="col wd-grey-text"><i className="fas fa-calendar-alt"/> Joined February 2015</span>
            </div>

            <div className="col-12 ">
                <span className="col-2">{prop.followingCount}<span
                    className="wd-grey-text"> Following</span></span>
                <span className="col-2">{prop.followersCount}<span
                    className="wd-grey-text"> Follower</span></span>
            </div>


        </div>)
}

const Profile = (prop) => {
    let userInfo = prop.userInfo;
    if (userInfo === undefined) {
        return <></>;
    }
    return (
        <div className="container">
            <Header {...userInfo}/>

            <div className="row wd-dark-background">
                <img src={require("" + userInfo.bannerPicture).default} alt="user's banner"
                     className="img-fluid"/>
            </div>


            <div className="col-12 wd-dark-background">
                <img src={require("" + userInfo.profilePicture).default} alt="user'avatar"
                     className="wd-avatar-in-basic-info"/>
                <button className="btn wd-edit-profile-button"
                        onClick={prop.editProfileHandler}>Edit Profile
                </button>
            </div>

            <BasicInfo {...userInfo}/>

        </div>
    )
}
export default Profile
