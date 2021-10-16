import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../PostSummaryList/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function () {
    document.getElementById('wd-explore').innerHTML=`
     <div class = "row">            
        <div class = "col-xxl-2 col-xl-2 col-lg-1 col-md-1  col-sm-1">
            ${NavigationSidebar()}
        </div>
        
        <div class = "col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 ">
            ${ExploreComponent()}
        </div>   
        
        <div class = "col-xxl-4 col-xl-4 col-lg-3 col-md-1 col-md-1">
            ${WhoToFollowList()}
        </div>  
 
     </div>
    `;
})();
