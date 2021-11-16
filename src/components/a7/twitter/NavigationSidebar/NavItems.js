import React from "react";
import {Link} from "react-router-dom";

const NavItems = (props) => {
    return (
        <>
            <Link to={'/a7/twitter/' + props.item.text}>
                <li className={"list-group-item" + (props.isActive ? " active":"")} id = "wd-nav-background-color" >
                    <i className = {props.item.iconClass} id ="wd-nav-Icons"/>&nbsp;
                    {props.item.text}
                </li>
            </Link>
        </>

    )
}
export default NavItems;
