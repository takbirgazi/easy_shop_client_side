import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="w-11/12 mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Website Name */}
                <div className="text-white font-bold text-lg md:w-1/3 text-center md:text-left mb-4 md:mb-0"> <NavLink to="/">E-Commerce </NavLink> </div>

                {/* Right side: Search, Filter, Sorting */}
                <div className="flex flex-col md:flex-row md:w-2/3 items-center justify-between">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md"
                    />

                    {/* Filter Option */}
                    <select className="mb-4 md:mb-0 md:mr-4 p-2 w-full md:w-auto rounded-md">
                        <option value="">Filter</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>

                    {/* Sorting Option */}
                    <select className="p-2 w-full md:w-auto rounded-md">
                        <option value="">Sort By</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;