const TWEET_API = 'http://localhost:4000/api/tweets';

const fetchAllTweets = (dispatch) =>{
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
                  dispatch({
                               type: 'fetch-all-tweets',
                               tweets
                           })
        );
}
export default fetchAllTweets;