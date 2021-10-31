import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem.js";


const listGroupMargin = {
    marginTop : "17px",
}

const wdFontWeightBold = {
    fontWeight : "bold",
    backgroundColor: "black",
    color: "white",
}

const WhoToFollowList = () =>{
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
