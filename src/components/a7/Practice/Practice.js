import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";


const Practice = () =>{
    return (
        <>
            <h1>A7 Practice</h1>
            <Link to={"/"}>
               Homepage
            </Link>____
            <Link to={"/a7/twitter/home"}>
                A6 HomeScreen
            </Link>____

            <Link to={"/a7/twitter/explore"}>
                A6 ExploreScreen____
            </Link>

            <Link to={"/a7/practice"}>
                A7 Practice____
            </Link>

            <Link to={"/a7/build"}>
                A7 Build____
            </Link>

            <ReduxExamples/>
        </>
    )
}
export default Practice;

