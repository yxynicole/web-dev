/*PostSummaryItem function accepts an argument called post
* that represents a summary of a suggested posts and returns
* an HTML string.
*/
const PostSummaryItem = (post) =>{
    return (`
            <li class="list-group-item wd-list-item-bg-color">
                <div class ="row wd-list-item-bg-color">
                    <div class="col-10 wd-list-item-bg-color">
                        <div class = "wd-topic">${post.topic}</div>
                        <div class = "wd-font-weight-bold">${post.userName} <i class ="fas fa-check-circle check-mark-verified-accounts"></i><span class="published-time"> - ${post.time}</span></div>
                        <div class ="wd-font-weight-bold">${post.title}</div>
                        <div class="wd-tweets-count">${post.tweets}</div>
                    </div>

                    <div class="col-2">
                        <img src = "${post.image}" alt = "${post.username} LOGO" class="wd-tweet-pictures img-fluid ">
                    </div>
                </div>
            </li>
    `);
}
export default PostSummaryItem;
