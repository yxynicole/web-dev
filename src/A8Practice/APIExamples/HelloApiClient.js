import React, {useEffect, useState} from "react";
import BACKEND_URL from "../../config";

const HelloApiClient = () => {
    const [hello, setHello] = useState('');

    useEffect(() => {
        fetch(BACKEND_URL+'/hello')
            .then((response) => {
                response.text();
            })
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );

};
export default HelloApiClient;