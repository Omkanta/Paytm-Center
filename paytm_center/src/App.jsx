import React from 'react';
import './App.css';
import AllRoutes from './Component/AllRoutes';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
const App=()=>{
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
