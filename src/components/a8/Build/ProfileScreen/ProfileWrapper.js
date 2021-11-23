import React, {useEffect} from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../../services/profileService";

const ProfileWrapper = () => {
    const profileData = useSelector(reducers => reducers.profileReducer);
    console.log("profile wrapper ", profileData);
    const dispatch = useDispatch();

    useEffect(() => getCurrentProfile(dispatch), [])

    const handlers = {
        editProfileHandler: () => {
            dispatch({type: 'edit-profile'});
        },
        saveHandler: (data) => {
            const action = {
                type: 'save-profile',
                data
            }
            dispatch(action);
        },
        closeHandler: () => {
            dispatch({type: 'close-profile'});
        }
    }

    if (profileData.isEdit) {
        return <EditProfile userInfo={profileData.userInfo} {...handlers}/>
    } else {
        return <Profile userInfo={profileData.userInfo} {...handlers}/>
    }

}
export default ProfileWrapper
