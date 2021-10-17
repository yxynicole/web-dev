import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <!-- search bar AND gear -->
           <div class = "row wd-search-bar-margin">
                <!-- search bar-->
                <div class = "col-10">
                    <i class="fas fa-search fa-xs wd-search-icon"></i>
                    <form class="form-inline">
                            <input class="form-control mr-sm-2 wd-search-bar-border-radius" type="search" placeholder="   Search Twitter" aria-label="Search">
                        </form>
                </div>
                <!-- gear -->
                <div class = "col-2">
                    <i class="fas fa-cog fa-2x wd-gear"></i>
                </div>
            </div>
           
          <!-- nav bar using tabs -->
            <ul class ="nav nav-tabs wd-nav-tabs-margin">
                <li class="nav-item" >
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link list-item-bg-color" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link list-item-bg-color" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link list-item-bg-color" href="#">Sports</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link list-item-bg-color" href="#">Entertainment</a>
                </li>
            </ul>
        <!-- contents -->
            <div><img src = "../PostSummaryList/Starship-Mk1-Day.jpeg" alt="Starship Mk1 Picture" class ="img-fluid"></div>          
        <!-- tweets -->
         ${PostSummaryList()}  
    `);
}
export default ExploreComponent;
