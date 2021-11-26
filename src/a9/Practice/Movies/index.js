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

    return (
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map(movie =>
                                   <li key={movie._id}
                                       className="list-group-item">
                                       {movie.title}
                                   </li>
                    )
                }
            </ul>
        </div>
    )
};
export default Movies;
