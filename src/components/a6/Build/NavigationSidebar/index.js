import React from "react";
import navItem from "./navItemCollection.json";
import NavItems from "./NavItems.js";

const NavigationSidebar = (props) => {
    return(
        <>
            <ul className="list-group list-group-margin">
                {console.log("hello", navItem)}
                {console.log(props)}
                {/*{*/}
                {/*navItem.map( i => {*/}
                {/*    return <NavItems item = {i} active={props.active}/>;*/}
                {/*})*/}
                {/*}*/}
                <button type="button" className="btn btn-primary form-control wd-buttons">
                    Tweet
                </button>
            </ul>
        </>
    );
}

export default NavigationSidebar;