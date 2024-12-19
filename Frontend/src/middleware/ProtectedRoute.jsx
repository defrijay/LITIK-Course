import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIdentity } from '../context/IdentityContext';

const ProtectedRoute = ({ children }) => {
    const { identity } = useIdentity();

    // Jika identitas belum diisi, arahkan ke halaman /identity
    if (!identity) {
        return <Navigate to="/identity" />;
    }

    return children;
};

export default ProtectedRoute;
