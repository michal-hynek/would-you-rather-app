import { Navigate } from "react-router-dom";

const PrivateRoute = ({ currentUser, children }) => {
    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute;
