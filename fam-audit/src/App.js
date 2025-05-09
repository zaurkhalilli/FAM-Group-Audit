import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./Layout/Layout";
function App() {
  return (
    <div>
         <BrowserRouter>
          <ScrollToTop /> 
             <Layout>
      <Routes>
        
      </Routes>
    </Layout> 
         </BrowserRouter>
    </div>
  );
}

export default App;
