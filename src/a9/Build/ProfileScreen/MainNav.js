import React from "react";

const MainNav = ()=>{
    return(
        <div className="row wd-row-padding-basic-info">
            <div className="col-3">
                <button className="btn activeTableTab wd-grey-text">Tweets</button>
            </div>
            <div className="col-3">
                <button className="btn wd-grey-text"> Replies</button>
            </div>
            <div className="col-3">
                <button className="btn wd-grey-text ">Media</button>
            </div>
            <div className="col-3">
                <button className="btn wd-grey-text ">Likes</button>
            </div>

        </div>
    )
}
export default MainNav;
