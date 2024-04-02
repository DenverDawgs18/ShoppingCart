import { useEffect, useState, useContext } from "react";
import { ShopContext } from "./Router";
import Icon from "@mdi/react";
import { mdiMinusCircle, mdiPlusBox } from "@mdi/js";

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
        if(e.target.value === ""){
            setQuan(e.target.value)
        }
        else{
            setQuan(Number(e.target.value))
        }
        
        
        
        
    }
    function addQuan(){
        setQuan(quan + 1)
    }
    function subtractQuan(){
        
        setQuan(quan - 1)
        
        
    }
    return(
        obj && ( <div className="card">
            <div className="top">
                <img src={obj.image} alt="ima" className="cardImage" />
            </div>

            <div className="bottom">
                <h3>{obj.title.length > 25 ? obj.title.slice(0, 24) + '...' : obj.title}</h3>
                <h4>${obj.price}</h4>
                <form onSubmit={(e) => addToCart(e, obj, quan)} className="quanos">
                    <label htmlFor="quantity">Quantity:</label>
                    <div className="quant">
                        <Icon path={mdiMinusCircle} size={1} onClick={subtractQuan} />
                        <input type="number" name="quantity" id="quantity" min="1"
                        value={quan}  onChange={(e) => handleQuanChange(e)}/>
                        <Icon path={mdiPlusBox} size={1} onClick={addQuan}/>
                    </div>
                    
                    <button type="submit" className="add">Add to cart</button>
                </form>
            </div>
            
        </div>
    ))
}