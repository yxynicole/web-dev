import React from 'react';
import {Link} from "react-router-dom";


const BuildIndex = () =>{
    return (
        <>
            <h1>Hello World! from build</h1>
            <Link to={"/a7/hello"}>
                Hello
            </Link> |

            <Link to={"/a7/practice/"}>
                Practice
            </Link> |

            <Link to={"/a7/twitter/explore"}>
                Twitter-Explore
            </Link> |

            <Link to={"/a7/twitter/home"}>
                Twitter-Home
            </Link>
        </>
    )
}
export default BuildIndex;