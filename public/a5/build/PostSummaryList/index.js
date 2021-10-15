const ExploreComponent = () => {
    return(`
        <div class = "col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 ">
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
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#">Entertainment</a>
            </li>
        </ul>

        <!-- contents -->
        <div><img src = "Starship-Mk1-Day.jpeg"  class ="img-fluid"></div>

        <!-- tweets -->
        <ul class="list-group list-group-margin">
            <!-- ReactJS -->
            <li class="list-group-item ">
                <div class ="row">
                    <div class="col-10 ">
                        <div class = "wd-topic">Web Development</div>
                        <div class = "wd-font-weight-bold">ReactJS <i class ="fas fa-check-circle check-mark-verified-accounts"></i><span class="published-time"> - 2h</span></div>
                        <div class ="wd-font-weight-bold">React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAS</div>
                        <div class="wd-tweets-count">1,259 Tweets</div>
                    </div>

                    <div class="col-2">
                        <img src = "react-logo.png" alt = "ReactJS LOGO" class="img-fluid wd-tweet-pictures ">
                    </div>
                </div>
            </li>

            <!-- JavaScript -->
            <li class="list-group-item ">
                <div class ="row">
                    <div class="col-10">
                        <div class = "wd-font-weight-bold">JavaScript <i class ="fas fa-check-circle check-mark-verified-accounts"></i><span class="published-time"> - 2h</span></div>
                        <div class ="wd-font-weight-bold">JavaScript is programming language that can run on browsers as well as desktops</div>
                        <div class="wd-tweets-count">123K Tweets</div>
                    </div>

                    <div class="col-2">
                        <img src = js-logo.png alt = "javaScript LOGO" class="img-fluid wd-tweet-pictures">
                    </div>
                </div>
            </li>

            <!-- JQuery -->
            <li class="list-group-item">
                <div class ="row">
                    <div class="col-10">
                        <div class = "wd-topic">Web Development</div>
                        <div class = "wd-font-weight-bold">jQuery</div>
                        <div class="wd-tweets-count">123K Tweets</div>
                    </div>

                    <div class="col-2">
                        <img src = jquery-logo.png alt = "javaScript LOGO" class="img-fluid wd-tweet-pictures">
                    </div>
                </div>
            </li>

            <!-- NodeJS -->
            <li class="list-group-item ">
                <div class ="row" >
                    <div class="col-10">
                        <div class = "wd-topic">Web Development</div>
                        <div class = "wd-font-weight-bold">NodeJs <i class ="fas fa-check-circle check-mark-verified-accounts"></i><span class="published-time"> - 2h</span></div>
                        <div class="wd-tweets-count">123K Tweets</div>
                    </div>

                    <div class="col-2">
                        <img src =nodeJs-logo.png alt = "node-js LOGO" class="img-fluid wd-tweet-pictures">
                    </div>
                </div>
            </li>
        </ul>
    </div>

    `);
}

export default ExploreComponent;
