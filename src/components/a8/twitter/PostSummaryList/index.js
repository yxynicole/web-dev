import React from "react";
import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem"

const listGroupMargin = {
    marginTop : "17px"
}

const PostSummaryList = () => {
    JSON.stringify(posts)
    return(
        <ul className="list-group" style={listGroupMargin}>
            {posts.map(p => <PostSummaryItem post = {p}/>)}
        </ul>
    )
}
export default PostSummaryList;
