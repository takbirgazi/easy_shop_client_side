import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Navbar = () => {
    const { setSearch, setSortValue, setCategoryValue } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);

    axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res => {
            const allCategories = res.data;
            setCategories(allCategories);
        })

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
    }
    const handlerSort = (event) => {
        const value = event.target.value;
        setSortValue(value);
    }
    const handlerFilter = (event) => {
        const value = event.target.value;
        setCategoryValue(value);
    }
    
    return (
        <nav className="bg-gray-800">
            <div className="w-11/12 mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Website Name */}
                <div className="text-white font-bold text-lg md:w-1/3 text-center md:text-left mb-4 md:mb-0"> <NavLink to="/">Easy Shop</NavLink> </div>

                {/* Right side: Search, Filter, Sorting */}
                <div className="flex flex-col md:flex-row md:w-2/3 items-center justify-between">
                    {/* Search Bar */}
                    <input onChange={handleSearch}
                        type="text"
                        placeholder="Search..."
                        className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md"
                    />

                    {/* Filter Option */}
                    <select onChange={handlerFilter} defaultValue="category" className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md">
                        <option value="category" disabled>Category</option>
                        {
                            categories.map(category => <option key={category} value={category}>{category}</option>)
                        }
                    </select>

                    {/* Sorting Option */}
                    <select onChange={handlerSort} defaultValue='sort' className="p-2 w-full md:w-auto rounded-md">
                        <option value="sort" disabled>Sort By</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;