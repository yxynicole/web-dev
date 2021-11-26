import React, {useEffect, useState} from "react";
import service from './service';                        // import the movie service

const Movies = () => {
    // create a local movies state variable
    const [movies, setMovies] = useState([]);

    // add state variable to hold movie from server
    const [movie, setMovie] = useState({title: ''});

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

    const createMovie = () => {
        service.createMovie({title: 'New Movie'})
            .then(actualMovie => {
                      setMovies([
                                    actualMovie, ...movies
                                ])
                  }
            );
    }

    const findMovieById = (movie) =>{
        service.findMovieById(movie._id)
            .then(movie => setMovie(movie));
    }


    return (
        <div>
            <button
                onClick={createMovie}
                className="btn btn-success float-end">
                Create
            </button>

            <h2>Movies</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        defaultValue={movie.title}
                        className="form-control"/>
                </li>

                {
                    movies.map(movie =>
                                   <li key={movie._id}
                                       className="list-group-item">
                                       <button
                                           onClick={() => findMovieById (movie)}
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
