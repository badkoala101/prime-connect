import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRooute = () => {
    const isAuthenticated=!!localStorage.getItem('token');      

    return isAuthenticated ?<Outlet/>: <Navigate to='/signin'/>
}

export default ProtectedRooute
