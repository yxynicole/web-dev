import React from "react";
import {Link} from "react-router-dom";

const NavItems = (props) => {
    const liClassName = "list-group-item" + (props.isActive ? " active" : "");
    return (
        <>
            <Link to={'/a9/twitter/' + props.item.text}>
                <li className={liClassName} id="wd-nav-background-color">
                    <i className={props.item.iconClass} id="wd-nav-Icons"/>
                    &nbsp;{props.item.text}
                </li>
            </Link>
        </>

    )
}
export default NavItems;
