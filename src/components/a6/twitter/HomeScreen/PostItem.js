import React from "react";

const listItemBgColor = {
    backgroundColor : "black",
    color : "white"
}

const userAvatar = {
    borderRadius: "50%"
}

const userNameStyle = {
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
    return (
    <div>
        <li className="list-group-item" style = {listItemBgColor}>
            <div className ="row " style = {listItemBgColor}>
                <Col2Item post={prop.post}/>
                <Col10Item post={prop.post} />
            </div>
        </li>
    </div>
    );
}
const Col2Item = (prop) => {
    return (
        <div className="col-2">
            <img src = {require(""+prop.post.avatar).default} alt = {prop.post.username}  className="img-fluid" style ={userAvatar}/>
        </div>
    )
}

const Col10Item = (prop) => {
    return (
        <div className="col-10" style = {listItemBgColor}>
            <div style= {userNameStyle}>{prop.post.userName}
                <span>
                    <i className ={prop.post.icon} style={checkMarkForVerifiedAccounts}/>
                </span>
                <span style = {userHandle}>{prop.post.handle}</span>
                <span style = {publishTime}>{prop.post.time}</span>
                <div className = {prop.post.ellipsisIcon} style = {ellipsisIcon}/>
            </div>

            <div dangerouslySetInnerHTML={{__html:prop.post.content}}/>

            <ul className="list-group" style = {listGroupMargin}>
                <li className="list-group-item" style = {listItemBgColor}>
                    <div>
                        <img src={require("" + prop.post.image).default} alt={""} className="img-fluid" style={imageBorderRadius}/>
                    </div>
                </li>
                <li className="list-group-item" style = {listItemBgColor} >
                    <div style = {fontWeight}>{prop.post.retweetTitle}</div>
                </li>
                <li className="list-group-item" style = {listItemBgColor}>
                    <div style = {retweetContent}>{prop.post.retweetContent}</div>
                </li>
            </ul>
            <Row4Item post={prop.post}/>
        </div>
    )
}

const Row4Item = (prop) => {
    return (
        <div className="container" style={iconBar}>
            <div className="row">
                <div className="col">
                    <div>
                        <i className={prop.post.commentIcon} style={iconColor}></i>
                            <span style= {distanceBtwIconAndCount}>{prop.post.commentCount}</span>

                    </div>
                </div>

                <div className="col">
                    <div>
                        <i className={prop.post.retweetIcon} style = {iconColor}></i>
                            <span style= {distanceBtwIconAndCount} >{prop.post.retweetCount}</span>

                    </div>
                </div>

                <div className="col">
                    <div>
                        <i className={prop.post.heartIcon} style = {iconColor}></i>
                            <span style= {distanceBtwIconAndCount}>{prop.post.heartCount}</span>

                    </div>
                </div>

                <div className="col">
                    <div>
                        <i className={prop.post.shareIcon } style={iconColor}></i>
                            <span style= {distanceBtwIconAndCount}/>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default PostItem;











