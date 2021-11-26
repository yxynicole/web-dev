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

    const deleteMovie = (movie) =>{
        service.deleteMovie(movie._id)
            .then(() => setMovies(movies.filter(m => m !== movie)));
    }

    return (
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map(movie =>
                                   <li key={movie._id}
                                       className="list-group-item">
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
