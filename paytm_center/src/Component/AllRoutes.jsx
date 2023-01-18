import React from "react";
import Home from "../Pages/Home"
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Register from "../Pages/Register";
import { Route, Routes } from "react-router-dom";

const AllRoutes=()=>{
    return (
        <Routes>
            <Route to="/" element={<Home/>}></Route>
            <Route to="/login" element={<Login/>}></Route>
            <Route to="/products" element={<Products/>}></Route>
            <Route to="/register" element={<Register/>}></Route>
        </Routes>
    )
}

export default AllRoutes;