import { useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "../Loading/Loading";

const Products = () => {
    const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            setAllproducts(res.data);
            setLoading(false);
        });

    return (
        <div className={`${loading ? "w-full h-full" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"}`}>
            {
                loading ? <Loading /> : allproducts.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    );
};

export default Products;