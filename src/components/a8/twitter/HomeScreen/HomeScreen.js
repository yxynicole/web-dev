import PostList from "./PostList.js";

function HomeScreen () {
    return(
        <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-1  col-sm-1">

            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-11 ">
                <PostList />
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-1 col-md-1">

            </div>

        </div>
    );
};
export default HomeScreen;