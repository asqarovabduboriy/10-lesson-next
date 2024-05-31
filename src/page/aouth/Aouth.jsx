import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Aouth = () => {
    let isLogin = localStorage.getItem("token")
    return isLogin ? <Outlet/> : <Navigate replace to={"/login"}/>
}

export default Aouth