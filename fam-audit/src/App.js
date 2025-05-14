import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Haqqimizda from "./Pages/Haqqimizda";
import Rehberlik from "./Pages/Rehberlik";
import Ethics from "./Pages/Ethics";
import Beynelxalqaudit from "./Pages/Beynelxalqaudit";
import XususiThesablar from "./Pages/XususiThesablar";
import Meslehet from "./Pages/Meslehet";
import Emlak from "./Pages/Emlak";
import Istintaq from "./Pages/Istintaq";
import Karyera from "./Pages/Karyera";
import Elaqe from "./Pages/Elaqe";
import Lisenziyalar from "./Pages/Lisenziyalar";
import Xidmetler from "./Pages/Xidmetler";
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
        <Route index path='/firstservice' element={<Beynelxalqaudit/>} />
        <Route index path='/secondservice' element={<XususiThesablar/>} />
        <Route index path='/thirdservice' element={<Meslehet/>} />
        <Route index path='/fourthservice' element={<Emlak/>} />
        <Route index path='/fifthservice' element={<Istintaq/>} />
        <Route index path='/elaqe' element={<Elaqe/>} />
        <Route index path='/karyera' element={<Karyera/>} />
        <Route index path='/lisenziyalar' element={<Lisenziyalar/>} />
         <Route index path='/services' element={<Xidmetler/>} />
        </Routes>
       </Layout> 
    </BrowserRouter>
    </div>
  );
}

export default App;
