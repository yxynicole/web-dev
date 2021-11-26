import BACKEND_URL from "../../config";

const PROFILE_API = BACKEND_URL + '/api/profile';

export const getCurrentProfile = (dispatch) => {
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
                  //console.log("in the fetch ", profile)
                  dispatch({
                               type: 'get-current-profile',
                               userInfo: profile
                           })
              }
        );
}