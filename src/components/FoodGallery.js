import React from 'react';
import {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
function FoodGallery() {
    const [recipe, setRecipe] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:7000/foodgallery')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRecipe(data.rec)
            })
    }, [])
console.log(recipe)
    function openRecipe(e){
        let id = e.target.id
        history.push('/recipe/'+id)
    }
    return (
        <div className="d-flex flex-wrap">
            {recipe.map((item, index) =>
                <div className="recipeBox" id={item._id} key={index}>
                    <h3>{item.title}</h3>
                    <div className="recipeImg">
                        {item.image.map((item, index) => <img key={index} src={item} alt=""/>)}
                    </div>
                    {/*<div>*/}
                    {/*    <h4>Produktai:</h4>*/}
                    {/*    {item.ingredients.map((item, index) => <div key={index}>* {item.value} {item.quantity}</div>)}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h4>Paruosimo budas</h4>*/}
                    {/*    {item.preparation.map((item, index) => <div key={index}>* {item}</div>)}*/}
                    {/*</div>*/}
                    <div className="button" id={item._id} onClick={openRecipe}>Open</div>

                </div>

            )}
        </div>

    );
}

export default FoodGallery;