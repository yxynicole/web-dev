import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 2.5});

    useEffect(() => {
        fetch('http://localhost:4000/api/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }, []);

    const deleteMovie = (movie) =>{
        //console.log(movie);
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {method:'DELETE'})
             .then(response => response.json())
             .then(movies => setMovies(movies));
    }

    const onMovieTitleChange = (event) =>{
        setMovie({...movie, title: event.target.value});
    }

    const createMovieClickHandler = () =>{
        fetch('http://localhost:4000/api/movies', {method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                                   <li className="list-group-item" key={movie._id}>
                                       {movie.title} {movie.rating}
                                       <button
                                           onClick={() => deleteMovie(movie)}
                                           className="btn btn-danger float-end">
                                           Delete
                                       </button>
                                   </li>
                    )
                }
                <li className="list-group-item">
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-end">
                        Create
                    </button>
                    <input
                        className="form-control"
                        value={movie.title}
                        onChange={onMovieTitleChange}
                        style={{width: "70%"}}/>
                </li>
            </ul>
        </div>
    )
};
export default MovieApiClient;
