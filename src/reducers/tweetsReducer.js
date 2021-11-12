import posts from '../data/tweets.json';

const initialState = {
    tweets: posts
}

const tweetsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'delete-tweet':
            return ({
                tweets: state.tweets.filter(tweet => tweet._id !== action.tweet._id)
            })
            break;

        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "tweet":{...action.tweet},
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ({
                tweets: [
                    {tweet:action.tweet},
                    ...state.tweets
                ]
            });
            break;
        default:
            return(state);
    }
};
export default tweetsReducer;
