import navArray from "./navItemsArray.js";
import navItems from "./NavItems.js";

const NavigationSidebar = (activeItemName) => {
    return(`
            <ul class="list-group list-group-margin">
                ${
                    navArray.map( e => {
                        return navItems(e,activeItemName);
                    }).join('')
                }
                <button type="button" class="btn btn-primary form-control wd-buttons">
                    Tweet
                </button>
            </ul> 
        `);
}

export default NavigationSidebar;
