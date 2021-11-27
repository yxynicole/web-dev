import BACKEND_URL from "../../../config";

const URL = BACKEND_URL + '/rest/who';

export const findAllWho = () => {
    return fetch(URL)
        .then(response => {
            return response.json()
        });
}

const whoService = {
    findAllWho,
}

export default whoService;