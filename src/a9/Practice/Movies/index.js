import React, {useEffect, useState} from "react";
import service from './service';                        // import the movie service

const Movies = () => {
    // create a local movies state variable
    const [movies, setMovies] = useState([]);

    // on load
    useEffect(() => {
        // retrieve all movies from database
        service.findAllMovies()
            // save movies from server to local
            .then(movies => setMovies(movies))

    }, [setMovies]);

    const deleteMovie = (movie) => {
        service.deleteMovie(movie._id)
            .then(() => setMovies(movies.filter(m => m !== movie)));
    }

    // add state variable to hold movie from server
    const [movie, setMovie] = useState({title: ''});

    const createMovie = () => {
        service.createMovie(movie)
            .then(actualMovie => {
                      setMovies([
                                    actualMovie, ...movies
                                ])
                  }
            );
    }

    const findMovieById = (movie) => {
        service.findMovieById(movie._id)
            .then(movie => setMovie(movie));
    }

    // save text input changes
    // in the local movie state variable
    const updateMovie = (event) => {
        setMovie({...movie, title: event.target.value});
    }

    // when user clicks save button
    // send local movie state variable to server
    // when server responds
    // replace updated movie
    const saveMovie = () => {
        service.updateMovie(movie)
            .then(() => setMovies(
                movies.map(m => m._id === movie._id ? movie : m)
            ));
    }

    return (
        <div>
            <h2>A9 Movies</h2>
            <button
                onClick={createMovie}
                className="btn btn-success float-end">
                Create
            </button>

            <button
                onClick={saveMovie}
                className="btn btn-primary float-end">
                Save
            </button>

            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={updateMovie}
                        defaultValue={movie.title}
                        className="form-control"/>
                </li>

                {
                    movies.map(movie =>
                                   <li key={movie._id}
                                       className="list-group-item">
                                       <button
                                           onClick={() => findMovieById(movie)}
                                           className="btn btn-warning float-end ms-2">
                                           Edit
                                       </button>

                                       <button
                                           className="btn btn-danger float-end"
                                           onClick={() => deleteMovie(movie)}>
                                           Delete
                                       </button>
                                       {movie.title}
                                   </li>
                    )
                }
            </ul>
        </div>
    )
};
export default Movies;
