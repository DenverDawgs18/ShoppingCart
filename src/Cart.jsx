import {Link} from "react-router-dom"


export default function Cart(){
    return(
        <>
            <div>Shopping cart goes here!</div>
            <Link to="/products">
                Go to products
                </Link>
            <Link to="/">
                 Go home
            </Link>
        </>
    )
}