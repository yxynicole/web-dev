const PROFILE_API = 'http://localhost:3000/api/profile';

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