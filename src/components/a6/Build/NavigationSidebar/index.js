import React from "react";
import navItem from "./navItemCollection.json";
import NavItems from "./NavItems.js";

const NavigationSidebar = (props) => {
    return(
        <>
            <ul className="list-group list-group-margin">
                {
                    navItem.map( e => <NavItems item = {e} isActive={props.activeText === e.text}/>)
                }
                <button type="button" className="btn btn-primary form-control wd-buttons">
                    Tweet
                </button>
            </ul>
        </>
    );
}

export default NavigationSidebar;
