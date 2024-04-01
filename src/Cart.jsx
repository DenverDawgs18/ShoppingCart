import Navbar from "./Navbar"
import {ShopContext}  from "./Router"
import {useContext} from 'react';
import { Link } from "react-router-dom";
export default function Cart(){
    const {cartItems, removeFromCart, changeQuantity, total} = useContext(ShopContext)
    
   if(cartItems.length !== 0){

   
    return(
        <>
            <Navbar />
           <div className="cart">
                <div className="cartCards">

                
                    {cartItems.map(item => (
                        <div className="card cartCard" key={item.id}>
                            <img src={item.image} alt="ima" className="cardImage" />
                            <button onClick={() => removeFromCart(item)}>X</button>
                            <div className="bottom">
                                <h3>{item.title}</h3>
                                <h4>${item.price}</h4>
                                <h4>Quantity: {item.quantity}</h4>
                                <button onClick={() => changeQuantity(item, 'plus')}>Add q</button>
                                <button onClick={() => changeQuantity(item, 'minus')}>Remove q</button>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartRight">
                    <h4>{total ? 'Total: ' + total 
                    : ''}</h4>
                </div>
            </div>
        </>
    )
    }
    else{
        return(
            <>
            <Navbar />
            <div className="none">
                
                <Link to="/products" style={{textDecoration: 'none', color: 'black'}}><h3 className="addp">Add products!</h3></Link>
            </div>
            

            </>
        )
    }
}