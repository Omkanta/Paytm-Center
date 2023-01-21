import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../Pages/Home";
import ProductsC from "../Pages/ProductsC";
import ProductsG from "../Pages/ProductsG";
import ProductsJ from "../Pages/ProductsJ";
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/productsC" element={<ProductsC/>}/>
            <Route path="/productsG" element={<ProductsG/>}/>
            <Route path="/productsJ" element={<ProductsJ/>}/>
        </Routes>
    )
}

export default AllRoutes;