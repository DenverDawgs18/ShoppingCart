import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./Router";

export default function Card({id}){
    const [obj, setObj] = useState(null)
    const [quan, setQuan] = useState(1)
    
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/` + id, {
        mode: 'cors'
    })
    .then((res) => res.json())
    .then((json) => setObj(json))
})
    const {addToCart} = useContext(ShopContext)
    function handleQuanChange(e){
        setQuan(e.target.value)
    }
    return(
        obj && ( <div className="card">
            <img src={obj.image} alt="ima" className="cardImage" />
            <div className="bottom">
                <h3>{obj.title}</h3>
                <h4>${obj.price}</h4>
                <form onSubmit={(e) => addToCart(e, obj, quan)} className="quanos">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" name="quantity" id="quantity" defaultValue={1} onChange={(e) => handleQuanChange(e)}/>
                    <button type="submit" className="add">Add to cart</button>
                </form>
            </div>
            
        </div>
    ))
}