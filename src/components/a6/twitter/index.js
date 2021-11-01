import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {BrowserRouter,Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";

function twitter() {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <Route path = "./ExploreScreen/ExploreScreen" exact={true}>
                        <ExploreScreen />
                    </Route>
                    <Route path = {["/","./HomeScreen/HomeScreen"]} exact={true}>
                        <HomeScreen />
                    </Route>
                </div>
            </BrowserRouter>
        </>
    );
}

export default twitter;

