import React, {useState} from "react";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        const action = {
            type: 'create-tweet',
            tweet:whatsHappening
        };
        dispatch(action);
    }

    return(
        <>
            <textarea value={whatsHappening} onChange={e => setWhatsHappening(e.target.value)} />
            <button onClick={tweetClickHandler}>Tweet</button>
        </>
    );
}
export default WhatsHappening
