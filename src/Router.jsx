import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";
import { createContext, useState } from "react";

export const ShopContext = createContext({
    cartItems: [],
    addToCart: () => {},
    changeQuantity: () => {},
    removeFromCart: () => {},
    totalCost: 0,
})
export  function Router(){
    const [cartItems, setCartItems] = useState([])

    function addToCart(e, obj, quan){
        e.preventDefault()
        let check = true;
        for(let i = 0; i < cartItems.length; i++){
            if(cartItems[i].id === obj.id){
                alert('Already added to cart')
                check = false;
            }
        }
        if(check){
            quan = Number(quan);
            
            let newObj = {
                ...obj,
                quantity: quan
            }
            console.log(newObj)
            setCartItems(
                [
                    ...cartItems,
                    newObj
                ]
            )
        }
    }
    function changeQuantity(item, sign){
        let currentQuan = item.quantity;
        if(sign === 'plus'){
            setCartItems(
                cartItems.map(it => {
                    if(it !== item){
                        return it;
                    }
                    else{
                        return{
                            ...it,
                            quantity: currentQuan + 1
                        }
                    }
                })
            )
        }
        else if(currentQuan - 1 === 0){
            removeFromCart(item)
        } 
        else{
            setCartItems(
                cartItems.map(it => {
                    if(it !== item){
                        return it;
                    }
                    else{
                        return{
                            ...it,
                            quantity: currentQuan - 1
                        }
                    }
                })
            )
        }
    }
    function removeFromCart(item){
        setCartItems(
            cartItems.filter(it => 
                it.id !== item.id)
        )
}
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "cart",
            element: <Cart />,
        },
        {
            path: "products",
            element: <Products />,
        },
    ]);


    return (

    <ShopContext.Provider value={{cartItems, addToCart, changeQuantity, removeFromCart}}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
    )
};




