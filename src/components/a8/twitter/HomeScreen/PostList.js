import React from "react";
import posts from "./post.json";
import PostItem from "./PostItem.js";

const listGroupMargin = {
    marginTop: "17px"
}

const PostList = () => {
    return(
        <ul className ="list-group" style = {listGroupMargin}>
            {posts.map(post => <PostItem post = {post}/>)}
        </ul>
    )
}
export default PostList;