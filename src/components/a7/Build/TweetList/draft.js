//try to refactor TweetListItem... didn't work
// import React from "react";
// import './tweet.css';
// import TweetStats from "./TweetStats";
// import {useDispatch} from "react-redux";
// const listItemBgColor = {
//     backgroundColor : "black",
//     color : "white"
// }
//
// const userAvatar = {
//     borderRadius: "50%"
// }
//
// const userNameStyle = {
//     color: "white",
//     fontWeight: "bold"
// }
//
// const checkMarkForVerifiedAccounts = {
//     paddingLeft: "5px"
// }
//
// const userHandle = {
//     fontWeight: "normal",
//     color : "rgb(110,118,125)"
// }
//
// const publishTime = {
//     fontWeight: "normal",
//     color : "rgb(110,118,125)"
// }
//
// const ellipsisIcon = {
//     float: "right",
//     color: "rgb(110,118,125)"
// }
//
// const listGroupMargin = {
//     marginTop : "17px"
// }
//
// const imageBorderRadius = {
//     borderRadius: "15px"
// }
//
// const fontWeight = {
//     fontWeight: "bold"
// }
//
// const retweetContent = {
//     color : "rgb(110,118,125)"
// }
//
// const iconBar = {
//     marginLeft: "10px"
// }
//
// const iconColor = {
//     color: "rgb(110,118,125)"
// }
//
// const distanceBtwIconAndCount = {
//     paddingLeft: "10px",
//     color: "rgb(110,118,125)"
// }
// const Col2Item = (tweet) => {
//     return (
//         <div className="col-2">
//             <img src={tweet['logo-image']} alt={tweet['userName']} className="img-fluid" style={userAvatar}/>
//         </div>
//     )
// }
//
//
// const Col10Item = (tweet) => {
//     const dispatch = useDispatch();
//     const deleteTweetClickHandler = () => dispatch({type: 'delete-tweet', tweet});
//
//     return (
//         <div className="col-10" style = {listItemBgColor}>
//             <div style= {userNameStyle}>
//                 <i onClick={deleteTweetClickHandler} className="fa fa-remove fa-pull-right"/>
//                 <span className="fw-bold">{tweet.userName}</span>
//
//                 {tweet.verified && <i className="ms-1 fas fa-badge-check"/>}
//                 <span className="ms-1 text-secondary">@{tweet.handle}</span>
//                 <span style = {publishTime}>{tweet.time}</span>
//                 {/*<div className = {prop.post.ellipsisIcon} style = {ellipsisIcon}/>*/}
//             </div>
//
//             <div>
//                 {tweet.tweet}
//             </div>
//
//             <ul className="list-group" style = {listGroupMargin}>
//                 <li className="list-group-item" style = {listItemBgColor}>
//                     {
//                         tweet.attachments && tweet.attachments.image &&
//                         <img alt="" src={tweet.attachments.image}
//                              className="mt-2 wd-border-radius-20px"
//                              style={{width: "100%"}}/>
//                     }
//                 </li>
//                 <li className="list-group-item" style = {listItemBgColor} >
//                     {
//                         tweet.attachments && tweet.attachments.video &&
//                         <iframe width="100%" height="350px"
//                                 className="mt-2 wd-border-radius-20px"
//                                 style={{width: "100%"}}
//                                 src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
//                                 title="YouTube video player" frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen/>
//                     }
//                 </li>
//
//             </ul>
//         </div>
//     )
// }
//
// const TweetListItem = ({tweet}) => {
//     return(
//         <li className="list-group-item">
//             <div className ="row " >
//                 <Col2Item t={tweet}/>
//                 <Col10Item t={tweet} />
//                 <TweetStats tweet={tweet}/>
//             </div>
//         </li>
//     );
// };
//
// export default TweetListItem;