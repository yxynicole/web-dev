import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);

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


    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                                   <li className="list-group-item" key={movie._id}>
                                       {movie.title} {movie.rating}
                                       <button onClick={() => deleteMovie(movie)}
                                               className="btn btn-danger float-end">
                                           Delete
                                       </button>

                                   </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
