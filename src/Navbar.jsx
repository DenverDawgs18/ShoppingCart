import {Link} from "react-router-dom"

import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';



export default function Navbar(){
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                    <h2 className="atlheader">AtlMoon</h2>
                </Link>
            </div>
            <div className="right">
                <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>
                    <h2 className="products">Products</h2>
                </Link>
                <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>
                    <Icon path={mdiCart} size={1.5} />
                </Link>
            </div>
        </div>
    )
}