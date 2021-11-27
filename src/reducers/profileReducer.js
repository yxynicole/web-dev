const initialState = {
    isEdit: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'get-current-profile':
            return ({
                userInfo: action.userInfo,
                isEdit: false
            })
        case 'edit-profile':
            return {
                ...state,
                isEdit: true
            }
        case 'save-profile':
            return {
                userInfo: {
                    ...state.userInfo,
                    ...action.data,
                },
                isEdit: false
            }
        default:
            return {
                ...state,
                isEdit: false
            }
    }
};

export default profileReducer;