import postArray from "./postArray.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
        <ul class="list-group list-group-margin ">
            ${
                postArray.map(PostItem).join('')
            }
        </ul>
    `)
}
export default PostList;