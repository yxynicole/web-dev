import React, {useEffect, useState} from "react";
import BACKEND_URL from "../../config";
const HOST = BACKEND_URL

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 2.5});

    useEffect(() => {
        fetch(HOST + '/api/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }, []);

    const deleteMovie = (movie) => {
        //console.log(movie);
        fetch(`${HOST}/api/movies/${movie._id}`, {method: 'DELETE'})
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    const onMovieTitleChange = (event) => {
        setMovie({...movie, title: event.target.value});
    }

    const createMovieClickHandler = () => {
        fetch(HOST+'/api/movies', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    }

    const saveMovie = () =>
        fetch(`${HOST}/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));

    return (
        <div>
            <h2>A8 Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">

                    <input
                        className="form-control"
                        value={movie.title}
                        onChange={onMovieTitleChange}
                        style={{width: "70%"}}/>
                    <button
                        onClick={createMovieClickHandler}
                        className="btn btn-success float-right">
                        Create
                    </button>
                    <button
                        onClick={saveMovie}
                        className="btn btn-primary ms-2 float-right">
                        Save
                    </button>
                </li>
                {
                    movies.map((movie) =>
                                   <li className="list-group-item" key={movie._id}>
                                       {movie.title} {movie.rating}
                                       <button
                                           onClick={() => deleteMovie(movie)}
                                           className="btn btn-danger float-right">
                                           Delete
                                       </button>

                                       <button onClick={() => setMovie(movie)}
                                               className="btn btn-primary float-right ms-2">
                                           Edit
                                       </button>

                                   </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
