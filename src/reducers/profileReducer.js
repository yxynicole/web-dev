import profileData from "../data/profileData.json";

const initialState ={
    userInfo:profileData[0],
    isEdit:false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'get-current-profile':
            console.log('profile reducer', action)

            return({
                userInfo:action.userInfo,
                isEdit: false
            })
        case 'edit-profile':
            return {
                ...state,
                isEdit: true
            }
        case 'save-profile':
            let newState = {
                userInfo: {
                    ...state.userInfo,
                    ...action.data,
                },
                isEdit:false
            }
            console.log('sending on save', newState)
            return newState
        default:
            return {
                ...state,
                isEdit: false
            }
    }
};



export default  profileReducer;