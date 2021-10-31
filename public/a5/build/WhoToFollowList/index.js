import whoToFollowListItem from "./WhoToFollowListItem.js";
import whoArray from "./who.js";


/* WhoToFollowList function should iterate over the who array
 * and use the function WhoToFollowListItem.
 */
const WhoToFollowList = () =>{
    return(`
        <ul class="list-group list-group-margin ">           
            <li class="list-group-item wd-font-weight-bold wd-list-item-bg-color">Who to follow</li>
            ${
                whoArray.map(whoToFollowListItem).join('')
            }  
        </ul>   
    `)
}
export default WhoToFollowList;
