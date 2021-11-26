import React from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/index";

const wholePageBackground = {
    backgroundColor:"black"
}

const A9ExploreScreen = () => {
    return (
        <div className="row mt-2" style = {wholePageBackground}>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar activeText="Explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    )
};
export default A9ExploreScreen;


