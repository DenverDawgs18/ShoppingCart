import { useEffect, useState } from "react";

export default function Card({id}){
    const [obj, setObj] = useState(null)
    console.log(id)
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/` + id, {
        mode: 'cors'
    })
    .then((res) => res.json())
    .then((json) => setObj(json))
})
    console.log(obj)
    return(
        obj && ( <div className="card">
            <img src={obj.image} alt="ima" className="cardImage" />
            <div className="bottom">
                <h3>{obj.title}</h3>
                <input type="number" name="quantity" id="quantity" defaultValue={1} />
                <button type="submit" className="add">Add to cart</button>
            </div>
            
        </div>
    ))
}