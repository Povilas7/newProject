import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useState, useEffect} from "react"

function Toolbar(){

    return(


        <div className='toolbar '>
            <div></div>
            <div className="d-flex jus-btw">
                <div className="link" >
                    <Link className="text" to="/home">Home</Link>
                </div>
                <div className="link">
                    <Link className="text" to="/foodgallery">Food gallery</Link>
                </div>

            </div>
        </div>
    )
}

export default Toolbar