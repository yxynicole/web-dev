const initialState = {
    tweets: []
}

const tweetsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'fetch-all-tweets':
            return ({
                tweets: action.tweets
            })

        case 'like-tweet':
            return ({
                tweets: state.tweets.map(tweet => {
                    if (tweet._id === action.tweet._id) {
                        if (tweet.liked === true) {
                            tweet.liked = false;
                            tweet.stats.likes--;
                        } else {
                            tweet.liked = true;
                            tweet.stats.likes++;
                        }
                        return tweet;
                    } else {
                        return tweet;
                    }
                })
            });

        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            });

        case 'create-tweet':
            return ({
                tweets: [
                    action.tweet,
                    ...state.tweets,
                ]
            });
        default:
            return (state);
    }
};
export default tweetsReducer;
