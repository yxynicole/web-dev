import React from "react";

const listItemBgColor ={
    backgroundColor : "black",
    color : "white",
}

const topicFontColor = {
    color: "rgb(110,118,125)"
}

const fontWeightBold = {
    fontWeight : "bold"
}

const publishTimeFont = {
    fontWeigh : "bold",
    color : "rgb(110,118,125)"
}

const tweetsCountFontColor = {
    color : "rgb(110,118,125)"
}

const tweetsPictureBorderRadius = {
    borderRadius:"20px"
}
const PostSummaryItem = (props) =>{
    return (
        <>
            <li className="list-group-item" style = {listItemBgColor}>
                <div className ="row" style = {listItemBgColor}>
                    <div className="col-10" style = {listItemBgColor}>

                        <div style = {topicFontColor}>{props.post.topic}</div>
                        <div style = {fontWeightBold}>{props.post.userName} <i className ="fas fa-check-circle check-mark-verified-accounts"></i><span style={publishTimeFont}> - {props.post.time}</span></div>
                        <div style = {fontWeightBold}>{props.post.title}</div>
                        <div style = {tweetsCountFontColor}>{props.post.tweets}</div>
                    </div>

                    <div className="col-2">
                        <img src = {require("" +props.post.image).default} alt = {props.post.userName}  className = "img-fluid" style={tweetsPictureBorderRadius}></img>
                    </div>
                </div>
            </li>
        </>
    )
}
export default PostSummaryItem;