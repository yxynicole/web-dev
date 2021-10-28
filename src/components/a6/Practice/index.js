import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from './Styles/index.js'
import ConditionalOutput from "./ConditionalOutput";
import Todo from "./Todo/TodoList";

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
            <Link to={"/a6/HelloWorld.js"}>
                Hello
            </Link>|
            <Link to={"/a6/Build/index.js"}>
                Build
            </Link>
            <Practice/>
        </>
    )
};
export default PracticeIndex;

