// ProtectedRoute.jsx
import React from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
    const navigate = useNavigate()
    console.log('Private Route works!')
    const authenticated = false;

    if (!authenticated) {
        navigate('/signin')
    }

    return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
