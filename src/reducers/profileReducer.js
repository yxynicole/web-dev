import profileData from "../data/profileData.json";

const initialState ={
    userInfo:profileData[0],
    isEdit:false
}

const profileReducder = (state = initialState, action) => {
    switch (action.type){
        case 'edit-profile':
            return {
                ...state,
                isEdit: true
            }
        default:
            return {
                ...state,
                isEdit: false
            }
    }
};



export default  profileReducder;