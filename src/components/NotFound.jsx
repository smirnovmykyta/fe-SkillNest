import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-xl text-gray-700 mt-2">Page not found</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Return to home
            </Link>
        </div>
    );
};

export default NotFound;
