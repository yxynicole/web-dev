let profiles = require('../data/profile.json');


module.exports = (app) => {
    const getCurrentProfile = (req, res)=>{
        res.json(profiles[0])
    }

    app.get('/api/profile',getCurrentProfile);
}
