import React from "react";
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
        <li className={"list-group-item" + (props.isActive ? " active":"")} style = {navItemBgColor}>
            <i className = {props.item.iconClass} style = {navIconsPadding}></i>
                <a href={props.item.link} style = {navLinkStyle}>{props.item.text}</a>

        </li>
    )
}
export default NavItems;
