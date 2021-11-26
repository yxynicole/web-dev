import React from "react"
import PostSummaryList from "../PostSummaryList/index";

const starship = require("./Starship-Mk1-Day.jpeg").default;

const searchBarMargin = {
    marginBottom: "10px",
};

const searchIcon = {
    position : "relative",
    top: "30px",
    left: "10px"
}

const searchBarBorderRadius = {
    borderRadius : "20px",
    width: "120%"
}

const gearIcon = {
    color : "#0d6efd",
    position : "relative",
    top : "24px"
}

const navTabsMargin = {
    marginBottom: "10px",
    borderBottomColor:"black"
}

const listItemBgColor = {
    backgroundColor : "black",
    color : "white"
}


const ExploreComponent = () => {
    return(
        <>
            <div className = {"row"} style = {searchBarMargin}>
                <div className = {"col-10"}>
                    <i className={"fas fa-search fa-xs"} style = {searchIcon}></i>
                    <form className={"form-inline"}>
                        <input className={"form-control mr-sm-2 "} style = {searchBarBorderRadius} type="search" placeholder="   Search Twitter" aria-label="Search" />
                    </form>
                </div>
                <div className = {"col-2"}>
                    <i className={"fas fa-cog fa-2x"} style = {gearIcon} />
                </div>
            </div>

            <ul className = {"nav nav-tabs"} style = {navTabsMargin}>
                <li className = {"nav-item"} >
                    <a className ={"nav-link active"} href="./">For you</a>
                </li>
                <li className = {"nav-item"}>
                    <a className ={"nav-link"} style = {listItemBgColor} href="./">Trending</a>
                </li>
                <li className = {"nav-item"}>
                    <a className = {"nav-link"} style = {listItemBgColor} href="./">News</a>
                </li>
                <li className ={"nav-item"}>
                    <a className ={"nav-link"}  style = {listItemBgColor} href="./">Sports</a>
                </li>
                <li className ={"nav-item"}>
                    <a className ={"nav-link"}  style = {listItemBgColor} href="./">Entertainment</a>
                </li>
            </ul>


            <div><img src = {starship}  alt="" className = "img-fluid" /></div>


            <PostSummaryList />
        </>
    );
}

export default ExploreComponent;
