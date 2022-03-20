import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ currentUser }) => {
    const location = useLocation();

    return currentUser
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />
};

export default ProtectedRoutes;
