import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Skeleton from '../../components/UI/Skeleton';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)

    const location = useLocation();
    if (loading) {
        return <Skeleton></Skeleton>
    }
    if (user && user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};
// 
export default PrivateRoute;