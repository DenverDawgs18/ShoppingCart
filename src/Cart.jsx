import Navbar from "./Navbar"
import {ShopContext}  from "./Router"
import {useContext} from 'react';
export default function Cart(){
    const {cartItems, removeFromCart, changeQuantity} = useContext(ShopContext)
    
   
    return(
        <>
            <Navbar />
            <div>Shopping cart goes here!</div>
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
          
        </>
    )
}