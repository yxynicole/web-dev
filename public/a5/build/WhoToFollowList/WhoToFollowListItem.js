/* Implements a function called WhoToFollowListItem that
* accepts a parameter called who.The parameter represents a single user we might want to follow.
*/
const whoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item wd-list-item-bg-color" >
            <div class = "row" >
                    <div class ="col-2"><img src= "${who.avatarIcon}" class ="img-fluid"></div>
                    <div class ="col-7">${who.userName}<i class ="fas fa-check-circle check-mark-verified-accounts"></i><div>@${who.handle}</div></div>
                    <div class ="col-3"><button class="btn btn-primary wd-buttons">Follow</button></div>
            </div>
        </li>
    `);
}
export default whoToFollowListItem;
