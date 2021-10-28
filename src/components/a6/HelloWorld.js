import React from 'react';
import {Link} from "react-router-dom";

const HelloWorld = () => {
  return (
      <>
        <h1>Hello World! from helloWord</h1>
        <Link to={"/a6/Practice/index.js"}>
          Practice
        </Link>|
        <Link to={"/a6/Build/index.js"}>
          Build
        </Link>
      </>
  )
};
export default HelloWorld;