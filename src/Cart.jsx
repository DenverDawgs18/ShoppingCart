import Navbar from "./Navbar"
import {ShopContext}  from "./Router"
import {useContext} from 'react';
export default function Cart(){
    const {cartItems} = useContext(ShopContext)
    
    console.log(cartItems)
    return(
        <>
            <Navbar />
            <div>Shopping cart goes here!</div>
            <div>{cartItems.length}</div>
        </>
    )
}