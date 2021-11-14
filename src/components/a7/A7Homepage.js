import React from "react";
import {Link} from "react-router-dom";

const A7Homepage = () =>{
    return (
        <>
            <h1>A7 Homepage</h1>
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

            <Link to={"/a7/profile"}>
                A7 ProfileScreen____
            </Link>
        </>
    )
}
export default A7Homepage