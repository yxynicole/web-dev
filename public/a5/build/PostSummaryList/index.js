import postArray from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group list-group-margin ">
            ${
                postArray.map(PostSummaryItem).join('')
            }
        </ul>
    `)
}
export default PostSummaryList;
