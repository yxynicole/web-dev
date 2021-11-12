import React, {useState} from "react";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const tweetClickHandler = () => {
        console.log(whatsHappening);
    }
    return(
        <>
            <textarea value={whatsHappening}
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}>
            </textarea>

            <button onClick={tweetClickHandler}>
                Tweet
            </button>

        </>

);
}
export default WhatsHappening;
