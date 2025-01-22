import React from "react";
import { Route, Routes} from "react-router-dom";

import Home from "./Component/Home";


import NewsDetail from "./Component/NewDetail";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import ProductIndia from "./Component/India";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/detail" element={<NewsDetail />} />
        <Route path="/Job" element={<ProductIndia />} />
        <Route path="/Internship" element={<ProductIndia />} />
       
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
