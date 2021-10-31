import React from "react";

const listItemBgColor = {
    backgroundColor : "black",
    color : "white"
}

const userAvatar = {
    borderRadius: "50%"
}

const userName = {
    color: "white",
    fontWeight: "bold"
}

const checkMarkForVerifiedAccounts = {
    paddingLeft: "5px"
}

const userHandle = {
    fontWeight: "normal",
    color : "rgb(110,118,125)"
}

const publishTime = {
    fontWeight: "normal",
    color : "rgb(110,118,125)"
}

const ellipsisIcon = {
    float: "right",
    color: "rgb(110,118,125)"
}

const listGroupMargin = {
    marginTop : "17px"
}

const imageBorderRadius = {
    borderRadius: "15px"
}

const fontWeight = {
    fontWeight: "bold"
}

const retweetContent = {
    color : "rgb(110,118,125)"
}

const iconBar = {
    marginLeft: "10px"
}

const iconColor = {
    color: "rgb(110,118,125)"
}

const distanceBtwIconAndCount = {
    paddingLeft: "10px",
    color: "rgb(110,118,125)"
}

const PostItem = (prop) => {
    return(
        <div>
            <li className="list-group-item" style = {listItemBgColor}>
                <div className ="row " style = {listItemBgColor}>
                    <!--right-side user's avatar-->
                    <div className="col-2">
                        <img src = {require(""+prop.post.avatar)} alt = {prop.post.username}  className="img-fluid" style ={userAvatar}></img>
                    </div>
                    <!--left-side  post list-->
                    <div className="col-10" style = {listItemBgColor}>
                        <!-- 1st row: username + user handle + publishing time-->
                        <div style= {userName}>{prop.post.userName}
                            <span><i className ={prop.post.icon} style={checkMarkForVerifiedAccounts}></i></span>
                            <span style = {userHandle}>{prop.post.handle}</span>
                            <span style = {publishTime}>{prop.post.time}</span>
                            <div className = {prop.post.ellipsisIcon} style = {ellipsisIcon}></div>
                        </div>

                        <!-- 2nd row: username's content-->
                        <div>{prop.post.content}</div>

                        <!-- 3rd row: content in retweet -->
                        <ul className="list-group" style = {listGroupMargin}>
                            <li className="list-group-item" style = {listItemBgColor}>
                                <div>
                                    <img src={require(""+prop.post.image).default} className="img-fluid" style={imageBorderRadius}>
                                </div>
                            </li>
                            <li className="list-group-item" style = {listItemBgColor} >
                                <div style = {fontWeight}>{prop.post.retweetTitle}</div>
                            </li>
                            <li className="list-group-item" style = {listItemBgColor}>
                                <div style = {retweetContent}>{prop.post.retweetContent}</div>
                            </li>
                        </ul>

                        <!-- 4th row: icon bar-->
                        <div className="container" style={iconBar}>
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <i className={prop.post..commentIcon} style={iconColor}>
                                            <span style= {distanceBtwIconAndCount}>{prop.post.commentCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>

                                <div className="col">
                                    <div>
                                        <i className={prop.post.retweetIcon} style = {iconColor}>
                                            <span style= {distanceBtwIconAndCount} >{prop.post.retweetCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>

                                <div className="col">
                                    <div>
                                        <i className={prop.post.heartIcon} style = {iconColor}>
                                            <span style= {distanceBtwIconAndCount}>{prop.post.heartCount}
                                            </span>
                                        </i>
                                    </div>
                                </div>

                                <div className="col">
                                    <div>
                                        <i className={prop.post.shareIcon } style={iconColor}>
                                            <span style= {distanceBtwIconAndCount}></span>
                                        </i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </li>
        <div/>
    )
};