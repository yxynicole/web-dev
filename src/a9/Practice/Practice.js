import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "../../A8Practice/APIExamples/index.js"

const Practice = () =>{
    return (
        <>
            <h1>Practice</h1>

            <Link to={"/a9/practice"}>
               Practice&nbsp;&nbsp;|
            </Link>

            <Link to={"/a9/twitter"}>
                &nbsp;&nbsp;Build
            </Link>

            <APIExamples/>

            <ReduxExamples/>
        </>
    )
}
export default Practice;


