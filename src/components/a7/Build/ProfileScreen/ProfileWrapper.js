import Profile from "./Profile";
import EditProfile from "./EditProfile";
import {useDispatch, useSelector} from "react-redux";

const ProfileWrapper = () => {
    const profileData = useSelector(reducers => reducers.profileReducer);
    //console.log({profileData});
    const dispatch = useDispatch();

    const handlers = {
        editProfileHandler: () => {
            dispatch({type:'edit-profile'});
        },
        saveHandler: (data) => {
            const action = {
                type:'save-profile',
                data
            }
            dispatch(action);
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
