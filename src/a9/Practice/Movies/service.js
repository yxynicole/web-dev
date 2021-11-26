const URL = 'http://localhost:4000/rest/movies';       // declare URL to service

export const findAllMovies = () =>fetch(URL).then(response => response.json());

export default {
    findAllMovies
};


