import {useState, useRef, useEffect} from 'react'

function Food(){
    const imageRef = useRef()
    const titleRef = useRef()
    const ingredientsRef = useRef()
    const quantityRef = useRef()
    const preparationRef = useRef()
    const [image, setImage] = useState([])
    const [title, setTitle] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [preparation, setPreparation] = useState([])

    function addTitle(){
        console.log(titleRef.current.value)
        setTitle(titleRef.current.value)
    }

    function addImage(){
        console.log(imageRef.current.value)
        setImage([...image, imageRef.current.value])
    }

    function addIngredients(){
        let obj = {
            value: ingredientsRef.current.value,
            quantity: quantityRef.current.value
        }
        console.log(ingredientsRef.current.value, quantityRef.current.value)
        setIngredients([...ingredients, obj])
    }
    function addPreparation(){
        console.log(preparationRef.current.value)
        setPreparation([...preparation, preparationRef.current.value])
    }

    console.log(image)

    function submit() {
        let recipes = {
            title: title,
            image: image,
            ingredients: ingredients,
            preparation: preparation
        }
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipes)
        }
        fetch('http://localhost:7000/food', options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div className="d-flex">
            <div className="d-flex flex-col boxFood mg-20">
                <div>
                    <input type="text" placeholder="Title" ref={titleRef}/>
                    <button onClick={addTitle}>Add title</button>
                </div>
                <div className="">
                    <input type="text" placeholder="Image url" ref={imageRef}/>
                    <button onClick={addImage}>Add image</button>
                </div>
                <div>
                    <input type="text" placeholder="Ingredients" ref={ingredientsRef}/>
                    <input type="text" placeholder="Quantity" ref={quantityRef}/>
                    <button onClick={addIngredients}>Add ingredients</button>
                </div>
                <div>
                    <input type="text" placeholder="Preparation method" ref={preparationRef}/>
                    <button onClick={addPreparation}>Add preparation</button>
                </div>
                <div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
            <div className="d-flex flex-col mg-20">
                <h3>{title}</h3>
                <div className="foodImg">
                    {image.map((item, index) => <img key={index} src={item} alt=""/>) }
                </div>
                <div>
                    {ingredients.map((item, index) => <div key={index}>{item.value} {item.quantity}</div>)}
                </div>
                <div>{preparation}</div>
            </div>

        </div>
    )
}

export default Food