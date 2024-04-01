import Navbar from "./Navbar"
import {ShopContext}  from "./Router"
import {useContext} from 'react';
export default function Cart(){
    const {cartItems} = useContext(ShopContext)
    
   
    return(
        <>
            <Navbar />
            <div>Shopping cart goes here!</div>
            <div className="cartCards">

            
                {cartItems.map(item => (
                    <div className="card cartCard" key={item.id}>
                        <img src={item.image} alt="ima" className="cardImage" />
                        <div className="bottom">
                            <h3>{item.title}</h3>
                            <h4>${item.price}</h4>
                            <h4>Quantity: {item.quantity}</h4>
                        </div>
                    </div>
                ))}
            </div>
          
        </>
    )
}