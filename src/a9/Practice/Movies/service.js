const URL = 'http://localhost:4000/rest/movies';       // declare URL to service

export const findAllMovies = () => fetch(URL).then(response => response.json());

export const deleteMovie = (id) => fetch(`${URL}/${id}`, {method: 'DELETE',});

export const createMovie = (movie) =>{
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

// implement function to retrieve movie by its ID
export const findMovieById = (id) =>{
    // send HTTP GET to URL including movie's ID
    // parse movie from response's body
    return fetch(`${URL}/${id}`)
        .then(response => response.json());
}

export default {
    findAllMovies,deleteMovie,createMovie,findMovieById
};


