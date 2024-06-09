import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Footer from "./components/Footer";
import MainHeader from "./components/MainHeader";
import Wishlist from "./components/Wishlist/index";

const MainLayout = () => {
  return (
    <>
        <Sidebar />
        <Wishlist/>
        <MainHeader/>
        <Outlet />
        <Footer/>
    </>
  );
};

export default MainLayout;
