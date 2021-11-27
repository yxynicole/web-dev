import React from "react";

const listItemBgColor = {
    backgroundColor: "black",
    color: "white",
}
const wdButtons = {
    borderRadius: "30px",
    marginTop: "5px",
    borderRight: "3px",
}

const WhoToFollowListItem = (props) => {
    return (
        <li className="list-group-item" style={listItemBgColor}>
            <div className="row">
                <div className="col-2"><img src={require("" + props.account.avatarIcon).default}
                                            alt={props.account.userName} className="img-fluid"/>
                </div>
                <div className="col-7">{props.account.userName} <i
                    className="fas fa-check-circle check-mark-verified-accounts"/>
                    <div>@{props.account.handle}</div>
                </div>
                <div className="col-3">
                    <button className="btn btn-primary" style={wdButtons}>Follow</button>
                </div>
            </div>
        </li>
    )
}
export default WhoToFollowListItem;
