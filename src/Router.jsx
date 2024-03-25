import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Products from "./Products";

export default function Router(){
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


    return <RouterProvider router={router} />;
};




