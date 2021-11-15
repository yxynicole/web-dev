import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";


const Practice = () =>{
    return (
        <>
            <h1>Practice</h1>

            <Link to={"/a7/practice"}>
               Practice&nbsp;&nbsp;|
            </Link>

            <Link to={"/a7/twitter"}>
                &nbsp;&nbsp;Build
            </Link>

            <ReduxExamples/>
        </>
    )
}
export default Practice;


