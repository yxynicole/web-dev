import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../WhoToFollowList/index.js";
import WhoToFollowList from "../PostSummaryList/index.js";
// import "./explore.css"

(function ($) {
    $('#wd-explore').append(`
     <div class = "row">
            ${NavigationSidebar()}
            ${WhoToFollowList()}
            ${ExploreComponent()}
     </div>
    `);
})($);
