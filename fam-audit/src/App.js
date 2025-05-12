import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Haqqimizda from "./Pages/Haqqimizda";
import Rehberlik from "./Pages/Rehberlik";
import Ethics from "./Pages/Ethics";
function App() {
  return (
    <div>
    <BrowserRouter>
    <ScrollToTop /> 
      <Layout>
       <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<Haqqimizda/>} />
        <Route index path='/rehberlik' element={<Rehberlik/>} />
        <Route index path='/ethics' element={<Ethics/>} />
        </Routes>
       </Layout> 
    </BrowserRouter>
   
    </div>
  );
}

export default App;
