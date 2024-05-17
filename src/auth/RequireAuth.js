import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ user, children }) {
    const location = useLocation();

    if (!user) {
        //  If user does not login, redirect to login page
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;  // If the user has logined, render directly
}

export default RequireAuth;
