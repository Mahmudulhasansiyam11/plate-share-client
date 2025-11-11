import React, { useEffect } from "react";
import NavBar from "../Components/Header/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading/Loading";

const Root = () => {
    const { state } = useNavigation();
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
        {/* NavBar */}
        <NavBar></NavBar>
        {/* Outlet */}
        {/* <Outlet></Outlet> */}
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        {/* Footer */}
        <Footer></Footer>
        <ToastContainer />
    </div>
  )
};

export default Root;
