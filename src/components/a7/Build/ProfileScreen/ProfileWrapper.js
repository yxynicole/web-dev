import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {useDispatch, useSelector} from "react-redux";

const ProfileWrapper = () => {
    const profileData = useSelector(reducers => reducers.profileReducer);
    const dispatch = useDispatch();

    const handlers = {
        editProfileHandler: () => {
            dispatch({type:'edit-profile'});
        },
        saveHandler: () => {
            dispatch({type:'save-profile'});
        },
        closeHandler: () => {
            dispatch({type:'close-profile'});
        }
    }

    if (profileData.isEdit){
        return <EditProfile userInfo={profileData.userInfo} { ...handlers}/>
    } else {
        return <Profile userInfo={profileData.userInfo} { ...handlers}/>
    }

}
export default ProfileWrapper
