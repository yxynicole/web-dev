const PROFILE_API = 'https://thawing-hollows-98347.herokuapp.com/api/profile';

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