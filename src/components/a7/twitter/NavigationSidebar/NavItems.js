import React from "react";
import {Link} from "react-router-dom";

const navItemBgColor ={
    backgroundColor: "black",
    color : "white",
};
const navIconsPadding={
    paddingLeft: "5px",
    paddingRight : "3px",
};

const navLinkStyle ={
    color: "white",
    textDecoration:"none",
};

const NavItems = (props) => {
    return (
        <>
            <Link to={'/a7/twitter/' + props.item.text}>
                <li className={"list-group-item" + (props.isActive ? " active":"")} style = {navItemBgColor}>
                    <i className = {props.item.iconClass} style = {navIconsPadding} />
                    {props.item.text}
                </li>
            </Link>
        </>

    )
}
export default NavItems;
