import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext({
    cartItems: [],
    addToCart: () => {},
    changeQuantity: () => {},
    removeFromCart: () => {},
    total: 0,
})
export  function Router(){
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        let tot = 0;
        for(let i = 0; i < cartItems.length; i++){
            tot = tot + cartItems[i].price * cartItems[i].quantity
            
        }
        tot = money_round(tot)
        console.log(tot)
        setTotal(tot)
    }, [cartItems])
    // taken from Stack OverFlow https://stackoverflow.com/questions/14968615/rounding-to-the-nearest-hundredth-of-a-decimal-in-javascript
    function money_round(num) {
        return Math.ceil(num * 100) / 100;
    }
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

    <ShopContext.Provider value={{cartItems, addToCart, changeQuantity, removeFromCart, total}}>
        <RouterProvider router={router} />
    </ShopContext.Provider>
    )
};




