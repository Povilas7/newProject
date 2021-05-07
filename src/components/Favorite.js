import React from 'react';
import {useParams} from "react-router-dom";
import {useState, useEffect, useRef} from 'react'


function Favorite() {
    const {id} = useParams()
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/getfavorites')
            .then(res => res.json())
            .then(data => {

                setFavorite(data.rec)
            })
    }, [])
    return (
        <div className="d-flex flex-wrap">
            {favorite.map((item, index) => <div className="recipeBox" id={item._id} key={index}>
                <h3>{item.title}</h3>
                <div className="recipeImg">
                    {item.image.map((item, index) => <img key={index} src={item} alt=""/>)}
                </div>
            </div>)}

        </div>
    );
}

export default Favorite;