import React from "react";
import {Link} from "react-router-dom";
// import HelloWorld from "../HelloWorld";
// import BuildIndex from "../Build/index"
// import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
import ReduxExamples from "./ReduxExamples/components";

export const Practice =() =>{
    return(
        <div>
            <h1>Practice</h1>

            <ReduxExamples/>
        </div>
    )
}

const PracticeIndex = () => {
    return (
        <>
            <h1> Practice</h1>

            <Link to={"/a7/twitter"}>
                Build
            </Link> |

            <Link to = {"/a7/twitter/explore"}>
                Twitter-Explore
            </Link> |

            <Link to = {"/a7/twitter/home"}>
                Twitter-Home
            </Link>

            <Practice/>
        </>
    )
};
export default PracticeIndex;

