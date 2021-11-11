import React from "react";
import navItem from "./navItemCollection.json";
import NavItems from "./NavItems.js";

const TwitterButton = {
    marginTop : "5px",
    borderRadius: "30px"
}

const listGroupMargin = {
    marginTop: "17px"
}

const NavigationSidebar = (props) => {
    return(
        <>
            <ul className="list-group" style ={listGroupMargin}>

                {navItem.map( e => <NavItems item = {e} isActive={props.activeText === e.text}/>)}

                <button type="button" className="btn btn-primary form-control" style={TwitterButton}>
                    Tweet
                </button>
            </ul>
        </>
    );
}

export default NavigationSidebar;
