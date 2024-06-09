import React from "react";
import Hero from "./components/HeroSection";
import SingleBanner from "./components/SingleBanner";
import BannerWithSlider from "./components/BannerWithSlider";
import CardSection from "./components/CardSection";
import SingleCart from "./components/SingleCart";
import BestSellerProducts from "./components/BestsellerProducts";
import SingleBrand from "./components/SingleBrand";
import Blog from "./components/Blog";
import Services from "./components/Services";

const Home = () => {
  return (
    <>        
          <Hero />
          <SingleBanner />
          <BannerWithSlider />
          <CardSection />
          <SingleCart/>
          <BestSellerProducts/>   
          <SingleBrand/>  
          <Blog/> 
          <Services/>
    </>
  );
};

export default Home;
