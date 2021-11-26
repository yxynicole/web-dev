import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice/Practice";
import Build from "./Build/Build";
import A9ExploreScreen from "./Build/ExploreScreen/A9ExploreScreen";
import A9ProfileScreen from "./Build/ProfileScreen/A9ProfileScreen"

const A9 = () => {
    return (
        <div>
            <Route path="/a9/practice" exact={true}>
                <Practice/>
            </Route>
            <Route path={["/a9/twitter", "/a9/twitter/Home"]} exact={true}>
                <Build/>
            </Route>

            <Route path={["/a9/twitter/Explore"]} exact={true}>
                <A9ExploreScreen/>
            </Route>

            <Route path={["/a9/twitter/Profile"]} exact={true}>
                <A9ProfileScreen/>
            </Route>
        </div>
    )
}
export default A9;


