import { Rating } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
    const singlePage = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleProduct = singlePage.find(prod => prod.id === idInt);
    const navigate = useNavigate();


    const [allproducts, setAllproducts] = useState([]);
    const [loading, setLoading] = useState(true);

    axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
            setAllproducts(res.data);
            setLoading(false);
        });
    
    const handleSingleProduct = (id) => {
        navigate(`/singleProduct/${id}`);
    }

    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full mt-4">
            <aside className="md:w-2/3 w-full">
                {
                    loading ? "Loading..." : <div className="border p-4 rounded-md">
                        <img src={singleProduct.image} alt={singleProduct.title} />
                        <h2 className="font-bold text-xl my-3">{singleProduct.title}</h2>
                        <div className="flex justify-between items-center my-4">
                            <p className="font-bold">${singleProduct.price}</p>
                            <p className="flex items-center justify-between"><Rating name="read-only" value={singleProduct.rating.rate} readOnly /> <span>({singleProduct.rating.count})</span></p>
                        </div>
                        <div>
                            <p>{singleProduct.description}</p>
                        </div>
                    </div>
                }
            </aside>
            <aside className="md:w-1/3 w-full border p-4 rounded-md">
                {
                    loading ? "Loading..." : <div>
                        {
                            allproducts.map(product => <ul key={product.id} onClick={() => handleSingleProduct(product.id)} className="cursor-pointer">
                                <li className="py-1 border-b ">
                                    <div className="flex gap-2 items-center">
                                        <img className="h-14 w-14" src={product.image} alt={product.title} />
                                        <div className="w-full">
                                            <p>{product.title}</p>
                                            <div className="flex justify-between items-center">
                                                <p>${product.price}</p>
                                                <p className="flex items-center justify-between"><Rating name="read-only" value={product.rating.rate} readOnly /> <span>({product.rating.count})</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>)
                        }
                    </div>
                }
            </aside>
        </div>
    );
};

export default SingleProduct;