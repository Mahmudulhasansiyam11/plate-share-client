import React, { useEffect } from "react";
import NavBar from "../Components/Header/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
        {/* NavBar */}
        <NavBar></NavBar>
        {/* Outlet */}
        <Outlet></Outlet>
        {/* Footer */}
        <Footer></Footer>
        <ToastContainer />
    </div>
  )
};

export default Root;
