let movies = [
    {_id:'123', title:'Aliens', rating:4.5},
    {_id:'234', title:'Terminator', rating:4.8},
    {_id:'345', title:'Avatar', rating:4.7}

];

module.exports = (app) =>{
    const getAllMovies = (req, res) => {
        res.json(movies);
    };
    app.get('/api/movies', getAllMovies);
}
