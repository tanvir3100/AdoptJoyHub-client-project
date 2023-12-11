import { useContext } from "react";
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from "../Provider/AuthProvider";




const PrivatenRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div><span className="loading loading-bars loading-lg"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivatenRouter;