import React from "react";


const EditProfile = (prop) => {
    return (
        <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
            Editing...g
            <button className="btn btn-primary" onClick={prop.closeHandler}>Close</button>
            <button className="btn btn-primary" onClick={prop.saveHandler}>Save</button>
        </div>
    )
}


export default EditProfile;
