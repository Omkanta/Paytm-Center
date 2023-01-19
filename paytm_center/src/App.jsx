import React from 'react';
import './App.css';
import AllRoutes from './Component/AllRoutes';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Footer from "./Component/Footer"

const App=()=>{
  return (
    <div className="App">
     {/* <AllRoutes/> */}
     <Navbar/>
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
