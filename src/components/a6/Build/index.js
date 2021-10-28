import React from 'react';
import {Link} from "react-router-dom";

const Index = () =>{
    return (
        <>
            <h1>Hello World! from build</h1>
            <Link to={"/a6/HelloWorld.js"}>
                Hello
            </Link>|
            <Link to={"/a6/Practice/index.js"}>
                Practice
            </Link>
        </>
    )
};
export default Index;