import React from 'react';
import {Link} from "react-router-dom";


const BuildIndex = () =>{
    return (
        <>
            <h1>Hello World! from build</h1>
            <Link to={"/a6/hello"}>
                Hello
            </Link> |

            <Link to={"/a6/practice/"}>
                Practice
            </Link> |

            <Link to={"/a6/twitter/explore"}>
                Twitter-Explore
            </Link> |

            <Link to={"/a6/twitter/home"}>
                Twitter-Home
            </Link>
        </>
    )
}
export default BuildIndex;