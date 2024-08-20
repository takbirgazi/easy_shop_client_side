import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "../Loading/Loading";
import { AuthContext } from "../../provider/AuthProvider";

const Products = () => {
    const { search, sortValue, categoryValue } = useContext(AuthContext);
    const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAPI = categoryValue ? `https://fakestoreapi.com/products/category/${categoryValue}` : `https://fakestoreapi.com/products`;

    axios.get(getAPI)
        .then(res => {
            setLoading(false);
            const products = res.data;
            if (sortValue) {
                if (sortValue == "lowToHigh") {
                    const sortProducts = [...products];
                    const sortProduct = sortProducts.sort((a, b) => (a.price - b.price));
                    const singProd = sortProduct.filter(prod => prod.title.includes(search))
                    setAllproducts(singProd);
                } else if (sortValue == "highToLow") {
                    const sortProducts = [...products];
                    const sortProduct = sortProducts.sort((a, b) => (b.price - a.price))
                    const singProd = sortProduct.filter(prod => prod.title.includes(search))
                    setAllproducts(singProd);
                }
            } else {
                const singProd = products.filter(prod => prod.title.includes(search));
                setAllproducts(singProd);
            }
        })

    return (
        <div className={`${loading ? "w-full h-full" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"}`}>
            {
                loading ? <Loading /> : allproducts.map((product) => (<ProductCard key={product.id} product={product} />))
            }
        </div>
    );
};

export default Products;