import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from './Styles/index.js'
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./Todo/TodoList";
import HelloWorld from "../HelloWorld";
import BuildIndex from "../Build/index"
import ExploreScreen from "../twitter/ExploreScreen/ExploreScreen";
export const Practice =() =>{
    return(
        <div>
            <h1>Practice</h1>
            <ConditionalOutput/>
            <Styles />
            <Classes/>
            <Todo/>
        </div>
    )
}

const PracticeIndex = () => {
    return (
        <>
            <h1> Hello World! from practice</h1>
            <Link to={"/a6/hello"}>
                Hello
            </Link> |

            <Link to={"/a6/build"}>
                Build
            </Link> |

            <Link to = {"/a6/twitter/explore"}>
                Twitter-Explore
            </Link> |

            <Link to = {"/a6/twitter/home"}>
                Twitter-Home
            </Link>

            <Practice/>
        </>
    )
};
export default PracticeIndex;

