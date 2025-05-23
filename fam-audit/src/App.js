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
      <BrowserRouter basename="/FAM-Group-Audit">
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Haqqimizda />} />
            <Route path="/rehberlik" element={<Rehberlik />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/firstservice" element={<Beynelxalqaudit />} />
            <Route path="/secondservice" element={<XususiThesablar />} />
            <Route path="/thirdservice" element={<Meslehet />} />
            <Route path="/fourthservice" element={<Emlak />} />
            <Route path="/fifthservice" element={<Istintaq />} />
            <Route path="/elaqe" element={<Elaqe />} />
            <Route path="/karyera" element={<Karyera />} />
            <Route path="/lisenziyalar" element={<Lisenziyalar />} />
            <Route path="/services" element={<Xidmetler />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
