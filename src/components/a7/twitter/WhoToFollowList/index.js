import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";

const listGroupMargin = {
    marginTop : "17px",
}

const wdFontWeightBold = {
    fontWeight : "bold",
    backgroundColor: "black",
    color: "white",
}

const WhoToFollowList = () =>{
    const who = useSelector(reducers => reducers.whoReducer)
    return(
        <>
            <ul className="list-group" style = {listGroupMargin}>
                <li className="list-group-item" style = {wdFontWeightBold}>Who to follow</li>
                {who.map(e => <WhoToFollowListItem account={e}  />)}
            </ul>
        </>
    )
}
export default WhoToFollowList;