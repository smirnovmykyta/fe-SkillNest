import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";
import {useUser} from "../context/UserContext.jsx";


const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    const { user } = useUser();

    return isAuthenticated && user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

