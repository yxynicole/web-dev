import React from 'react';
import {Route} from "react-router-dom";
import HomeScreen from "../twitter/HomeScreen/HomeScreen";
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";

const Build = () =>{
    return (
        // <>
        //     {/*<h1>Hello World! from build</h1>*/}
        //     {/*<Link to={"/a7/hello"}>*/}
        //     {/*    Hello*/}
        //     {/*</Link> |*/}
        //
        //     {/*<Link to={"/a7/practice/"}>*/}
        //     {/*    Practice*/}
        //     {/*</Link> |*/}
        //
        //     {/*<Link to={"/a7/twitter/explore"}>*/}
        //     {/*    Twitter-Explore*/}
        //     {/*</Link> |*/}
        //
        //     {/*<Link to={"/a7/twitter/home"}>*/}
        //     {/*    Twitter-Home*/}
        //     {/*</Link>*/}
        // </>
        <div>
            <Route path={["/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore" exact={true} component={ExploreScreen}/>
        </div>

    )
}
export default Build;