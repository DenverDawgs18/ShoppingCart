import {Link} from "react-router-dom"

export default function Products(){
    return(
        <>
            <div>Products go here</div>
            <Link to="/cart">
                Go to cart
            </Link>
            <Link to="/">
                Go home
            </Link>
        </>
    )
}