import React, {useState} from "react";

const Header = (prop) => {
    return (
        <div className="row wd-dark-background">

            <div className="col-1 wd-icon-padding-top">
                <i className="fas fa-times" onClick={prop.closeHandler}/>
            </div>

            <div className="col-9 wd-username-in-header wd-icon-padding-top">
                Edit profile
            </div>

            <div className="col-2 wd-icon-padding-top">
                <button className="btn wd-edit-profile-button" onClick={prop.saveHandler}>
                    Save
                </button>
            </div>
        </div>
    )
}

const EditProfile = (prop) => {
    let userInfo = prop.userInfo;
    const [userName, setUserName] = useState(userInfo.userName);
    const [bio, setBio] = useState(userInfo.bio);
    const [location, setLocation] = useState(userInfo.location);
    const [website, setWebsite] = useState(userInfo.website);

    function userNameChangeHandle(event) {
        setUserName(event.target.value);
    }

    function userBioChangeHandle(event) {
        setBio(event.target.value);
    }

    function userLocationChangeHandle(event) {
        setLocation(event.target.value);
    }

    function userWebsiteChangeHandle(event) {
        setWebsite(event.target.value);
    }

    function saveHandler() {
        prop.saveHandler({bio, userName, location, website});
    }

    return (<div className={"container"}>
        <Header {...userInfo} closeHandler={prop.closeHandler} saveHandler={saveHandler}/>

        <div className="row wd-row-padding-basic-info">
            <img src={require("" + userInfo.bannerPicture).default} alt="user's banner"
                 className="img-fluid"/>
        </div>

        <div className="col-12">
            <img src={require("" + userInfo.profilePicture).default} alt="user' avatar"
                 className="img-fluid wd-avatar-in-basic-info"/>
        </div>

        <form>
            <div className="form-group ">
                <label htmlFor="input-Name" className="wd-grey-text ">Name</label>
                <input onChange={userNameChangeHandle} type="text"
                       className="form-control wd-dark-background wd-border-grey"
                       id="input-Name"
                       placeholder={userName}
                       value={userName}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-Bio" className="wd-grey-text ">Bio</label>
                <input onChange={userBioChangeHandle} type="text"
                       className="form-control wd-dark-background wd-border-grey" id="input-Bio"
                       placeholder={bio}
                       value={bio}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-location" className="wd-grey-text">Location</label>
                <input onChange={userLocationChangeHandle} type="text"
                       className="form-control wd-dark-background wd-border-grey"
                       id="input-location"
                       placeholder={location}
                       value={location}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-website" className="wd-grey-text">Website</label>
                <input onChange={userWebsiteChangeHandle} type="text"
                       className="form-control wd-dark-background wd-border-grey"
                       id="input-location"
                       placeholder={website}
                       value={website}
                />
            </div>

        </form>

    </div>)
}

export default EditProfile;


