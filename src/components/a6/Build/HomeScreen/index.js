import React from "react";
import post from "./post.json";
import PostItem from "./PostItem.js";

const listGroupMargin = {
    marginTop: "17px"
}

const PostList = () => {
    return(
        <ul className ="list-group" style = {listGroupMargin}>
            {post.map(p => <PostItem post = {p}/>)}
        </ul>
    )
}
export default PostList;