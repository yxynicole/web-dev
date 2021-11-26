import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import ProfileWrapper from "./ProfileWrapper";
import MainNav from "./MainNav";

const A9ProfileScreen = () => {
    return (
        <div className="row mt-2">

            <div className="col-2 col-md-2 col-lg-1 col-xl-2 wd-dark-background">
                <NavigationSidebar active="home"/>
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6 wd-dark-background"
                 style={{"position": "relative"}}>
                <ProfileWrapper/>
                <MainNav/>
                <TweetList/>
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-dark-background">
                <PostSummaryList title="What's happening"/>
            </div>

        </div>
    )
}
export default A9ProfileScreen;