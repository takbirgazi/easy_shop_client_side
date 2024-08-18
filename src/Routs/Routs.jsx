import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import SingleProduct from "../Components/SingleProduct/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/singleProduct/:id",
                loader: () => fetch(`https://fakestoreapi.com/products`),
                element: <SingleProduct></SingleProduct>,
            }
        ]
    },
]);

export default router;