import BACKEND_URL from "../../../config";

const URL = BACKEND_URL + '/rest/movies';       // declare URL to service

export const findAllMovies = () => fetch(URL).then(response => response.json());

export const deleteMovie = (id) => fetch(`${URL}/${id}`, {method: 'DELETE',});

export const createMovie = (movie) => {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

// implement function to retrieve movie by its ID
export const findMovieById = (id) => {
    // send HTTP GET to URL including movie's ID
    // parse movie from response's body
    return fetch(`${URL}/${id}`)
        .then(response => response.json());
}

export const updateMovie = (movie) => {
    // send new movie
    // include movie's ID in the URL
    return fetch(`${URL}/${movie._id}`, {
        // use HTTP PUT method for update
        method: 'PUT',
        // include movie updates in body as string
        body: JSON.stringify(movie),
        headers: {
            // string formatted as JSON
            'content-type': 'application/json'
        }
        // parse status response from server as JSON
    }).then(response => response.json());
}

const service = {
    findAllMovies,
    deleteMovie,
    createMovie,
    findMovieById,
    updateMovie
}

export default service;


