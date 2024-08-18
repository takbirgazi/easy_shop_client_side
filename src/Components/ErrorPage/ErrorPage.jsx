import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
                <h2 className='font-bold text-4xl'>404 Page Not Found</h2>
                <NavLink className="btn border rounded-md px-4 py-1" to="/">Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;