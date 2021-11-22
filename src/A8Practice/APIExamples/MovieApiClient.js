import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);                  //declare empty array local state variable movies

    useEffect(() => {                                            //when the component first loads, send an HTTP request to this URL
        fetch('http://localhost:4000/api/movies')
            .then(response => response.json())                         // parse the JSON in the HTTP response from server
            .then(movies => setMovies(movies));                        // set movies state variable with movies from server
    }, []);                                                      // don't force re-render because state changed



    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                                   <li className="list-group-item"
                                       key={movie._id}>
                                       {movie.title} {movie.rating}
                                   </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
