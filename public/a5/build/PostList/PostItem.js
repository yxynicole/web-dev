//postItem renders a full post

const PostItem = (post) => {
    return (`
            <li class="list-group-item wd-list-item-bg-color">
                <div class ="row wd-list-item-bg-color">
                    <!--right-side user's avatar-->
                    <div class="col-2">
                        <img src = "${post.avatar}" alt = "${post.username} avatar" class="img-fluid wd-user-avatar ">
                    </div>
                    <!--left-side  post list-->
                    <div class="col-10 wd-list-item-bg-color">
                        <!-- 1st row: username + user handle + publishing time-->
                        <div class = "wd-user-name">${post.userName} 
                            <span><i class ="${post.icon} wd-check-mark-verified-accounts"></i></span>
                            <span class="wd-user-handle">${post.handle}</span> 
                            <span class="wd-published-time">${post.time}</span>
                            <div class="${post.ellipsisIcon} wd-ellipsisIcon"></div>
                        </div>
                        
                        <!-- 2nd row: username's content-->
                        <div>${post.content}</div>
                        
                        <!-- 3rd row: content in retweet -->
                        <ul class="list-group list-group-margin ">
                            <li class="list-group-item wd-list-item-bg-color">
                                <div>
                                    <img src="${post.image}" alt="${post.image} image" class="wd-image img-fluid">   
                                </div>
                            </li>
                            <li class="list-group-item wd-list-item-bg-color">
                                <div class="wd-retweet-title">${post.retweetTitle}</div>
                            </li>
                            <li class="list-group-item wd-list-item-bg-color">
                                <div class="wd-retweet-content">${post.retweetContent}</div>
                            </li>
                        </ul>
                      
                        <!-- 4th row: icon bar-->
                        <div class="container" id="wd-icon-bar">
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <i class="${post.commentIcon} wd-icons-color">
                                            <span class = wd-distance-btw-icon-and-count>${post.commentCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>
                                
                                <div class="col">
                                     <div>
                                        <i class="${post.retweetIcon} wd-icons-color">
                                            <span class = wd-distance-btw-icon-and-count >${post.retweetCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>
                                
                                <div class="col">
                                     <div>
                                        <i class="${post.heartIcon} wd-icons-color">
                                            <span class = wd-distance-btw-icon-and-count>${post.heartCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>
                                
                                <div class="col">
                                     <div>
                                        <i class="${post.shareIcon } wd-icons-color">
                                            <span class = wd-distance-btw-icon-and-count></span>
                                        </i>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </li>
    `);
}
export default PostItem;