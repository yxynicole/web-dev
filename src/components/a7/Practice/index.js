import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from './Styles/index.js'
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./Todo/TodoList";
import HelloWorld from "../HelloWorld";
import BuildIndex from "../Build/index"
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
import ReduxExamples from "./ReduxExamples/components";

export const Practice =() =>{
    return(
        <div>
            <h1>Practice</h1>
            <ConditionalOutput/>
            <Styles />
            <Classes/>
            <Todo/>
            <ReduxExamples/>
        </div>
    )
}

const PracticeIndex = () => {
    return (
        <>
            <h1> Practice</h1>

            <Link to={"/a7/hello"}>
                Hello
            </Link> |

            <Link to={"/a7/build"}>
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

