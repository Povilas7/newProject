import React from 'react';
import {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";




function SingleRecipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState([])
    const [favorite, setFavorite] = useState([])
    const [rev, setReviews] = useState([])
    const [color, setColor] = useState('white')
    const history = useHistory()

    const email = useRef()
    const range = useRef()
    const review = useRef()

    useEffect(() => {
        fetch('http://localhost:7000/singleRecipe/'+id)
            .then(res => res.json())
            .then(data => {
                setRecipe(data.rec)
            })
    }, [])

    function makeReview(){
        const reviewData = {
            id,
            email: email.current.value,
            points: range.current.value,
            review: review.current.value
        }
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        }
        fetch('http://localhost:7000/makeReview', options)
            .then(res => res.json())
            .then(data => {
                setReviews(data.recipe)
            })
    }

    function addFavorite(){

        // history.push('/favorite/'+id)
        fetch('http://localhost:7000/favorite/'+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFavorite(data.recipe)
            })
    }
    return (
        <div className="d-flex">
            <div className="mg-20">
                {recipe.map((item, index) =>
                    <div className="recipeBox" id={item._id} key={index}>
                        <div className="fav" onClick={addFavorite}>
                            {favorite.favorite ?
                                <i className="fas fa-star"></i> :
                                <i className="far fa-star"></i>
                            }
                        </div>
                        <h3>{item.title}</h3>
                        <div className="recipeImg">
                            {item.image.map((item, index) => <img key={index} src={item} alt=""/>)}
                        </div>
                        <div>
                            <h4>Produktai:</h4>
                            {item.ingredients.map((item, index) => <div key={index}>* {item.value} {item.quantity}</div>)}
                        </div>
                        <div>
                            <h4>Paruosimo budas</h4>
                            {item.preparation.map((item, index) => <div key={index}>* {item}</div>)}
                        </div>
                        <div>
                            <h3>Review</h3>
                            {item.reviews.map((item, index) => <div key={index} className="review">
                                <div>{item.email}</div>
                                <div>{item.points}</div>
                                <div>{item.review}</div>
                            </div>)}
                        </div>

                    </div>

                )}

            </div>
            <div className='mg-20'>
                <h3>Review</h3>
                <div className="reviewCart">
                    <input ref={email} type="text" placeholder="email"/>
                    <input ref={range} type="range" min="1" max="5"/>
                    <textarea ref={review} placeholder="Review text"/>
                    <div className="largeButton" onClick={makeReview}>REVIEW</div>
                </div>
            </div>

        </div>
    );
}

export default SingleRecipe;