import React from "react";
import navItem from "./navItemCollection.json";
import NavItems from "./NavItems.js";


const NavigationSidebar = (props) => {
    return(
        <>
            <ul className="list-group wd-list-group-margin">

                {navItem.map( e => <NavItems item = {e} isActive={props.activeText === e.text}/>)}

                <button type="button" className="btn form-control wd-nav-Twitter-button " >
                    Tweet
                </button>
            </ul>
        </>
    );
}

export default NavigationSidebar;
