const NavItems = (navItem, activeItemName) =>{

    return (`
            <li class="list-group-item wd-list-item-bg-color ${navItem.text === activeItemName ? "active" :""}">
                <i class = "${navItem.iconClass} left-column-icons">
                </i>
                <a href="${navItem.link}" style="color:white;
                                                 text-decoration:none"> ${navItem.text}</a>
            </li>
    `);
}
export default NavItems;
