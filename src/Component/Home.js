import React from "react";

import PodcastSection from "./PodcastSection";

import BreakingNews from "./BreakingSection";

import ProductForeign from "./NewsForeign";
import ProductIndia from "./India";

const Home = () => {
  return (
    <div>
      
     
       <div className="container py-52 h-28 mx-auto">
        </div>
      <BreakingNews/>
      <ProductIndia />
      <ProductForeign/>
        
      
      
       <PodcastSection/>
      
     
    </div>
  );
};

export default Home;
