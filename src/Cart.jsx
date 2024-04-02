import Navbar from "./Navbar"
import {ShopContext}  from "./Router"
import {useContext} from 'react';
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {mdiMinusCircle, mdiPlusBox} from "@mdi/js"
export default function Cart(){
    const {cartItems, removeFromCart, changeQuantity, total} = useContext(ShopContext)
    
   if(cartItems.length !== 0){

   
    return(
        <>
            <Navbar />
           <div className="cart">
                <div className="cartCards">

                    <h1 className="your">Your cart</h1>
                    {cartItems.map(item => (
                        <div className="cartCard" key={item.id}>
                            <img src={item.image} alt="ima" className="cardImage cartImage" />       
                            <div className="cartCardRight">
                                <div className="oneLine">
                                    <h3>{item.title}</h3>
                                    <button onClick={() => removeFromCart(item)} className="remove">X</button>
                                </div>
                                <h4>{item.quantity > 1 ? '$' + item.quantity * item.price + 
                                "  ($" + item.price + ' per)' : '$' + item.price}</h4>
                
                                <div className="quant">
                                    <Icon path={mdiMinusCircle} size={1} onClick={() => changeQuantity(item, 'minus')} />
                                    <h4>Quantity: {item.quantity}</h4>
                                    <Icon path={mdiPlusBox} size={1} onClick={() => changeQuantity(item, 'plus')}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartRight">
                    <h1>{total ? 'Total: $' + total 
                    : ''}</h1>
                    <button className="proceed">PROCEED TO CHECKOUT</button>
                    <Link to="/products" style={{textDecoration: 'none', color: 'black'}}><h3 className="addp">ADD PRODUCTS</h3></Link>
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
                
                <Link to="/products" style={{textDecoration: 'none', color: 'black'}}><h3 className="addp">ADD PRODUCTS</h3></Link>
            </div>
            

            </>
        )
    }
}