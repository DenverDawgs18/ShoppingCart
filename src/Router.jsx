import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";
import { createContext, useState } from "react";

export const ShopContext = createContext({
    cartItems: [],
    addToCart: () => {},
    
})
export  function Router(){
    const [cartItems, setCartItems] = useState([])
    function addToCart(e, obj, quan){
        quan = Number(quan);
        e.preventDefault()
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

    <ShopContext.Provider value={{cartItems, addToCart}}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
    )
};




