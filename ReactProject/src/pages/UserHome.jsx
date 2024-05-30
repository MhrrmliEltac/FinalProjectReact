import React from "react";
import Header from "../components/Header/Header";
import MainHome from "../components/Main/MainHome";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import UserHeader from "../components/Header/UserHeader";

const UserHome = () => {
  


  return (
    <>
      <UserHeader />
      <MainHome />
      <Footer />
    </>
  );
};

export default UserHome;
