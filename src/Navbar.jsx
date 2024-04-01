import {Link} from "react-router-dom"
import { ShopContext } from "./Router";
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import { useContext } from "react";



export default function Navbar(){
    const {cartItems} = useContext(ShopContext)
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                    <h2 className="atlheader">AtlanticMoon</h2>
                </Link>
            </div>
            <div className="right">
                <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>
                    <h2 className="productsHeader">Products</h2>
                </Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>
                    <Icon path={mdiCart} size={1.5} />
                    {
                        cartItems.length ? <div className="itemcontainer">
                        <h4 className="items">{cartItems.length}</h4>
                    </div> : null
                    }
                    
                </Link>
                
                
            </div>
        </div>
    )
}