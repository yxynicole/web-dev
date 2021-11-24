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

    const PROFILE_API = 'https://thawing-hollows-98347.herokuapp.com/api/profile';

    const handlers = {
        editProfileHandler: () => {
            dispatch({type: 'edit-profile'});
        },
        saveHandler: (data) => {
            console.log("client side, save Handler", data)
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }

            fetch(PROFILE_API, requestOptions)
                .then(response => response.json())
                .then(data => {
                    dispatch({type:'save-profile', data})
                })
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
