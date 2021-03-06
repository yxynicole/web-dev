import React, {useEffect} from "react";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../services/profileService";
import BACKEND_URL from "../../../config";

const PROFILE_API = BACKEND_URL + '/api/profile';

const ProfileWrapper = () => {
    const profileData = useSelector(reducers => reducers.profileReducer);
    const dispatch = useDispatch();

    useEffect(() => getCurrentProfile(dispatch), [dispatch])

    const handlers = {
        editProfileHandler: () => {
            dispatch({type: 'edit-profile'});
        },
        saveHandler: (data) => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }

            fetch(PROFILE_API, requestOptions)
                .then(response => response.json())
                .then(status=> {
                    if( status.modifiedCount > 0){
                        dispatch({type:'save-profile', data})
                    }
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
