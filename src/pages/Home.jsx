import React from "react";
import Navbar from "../components/Navbar";
import ArtsContainer from "../components/ArtsContainer";
import Profile from "../components/Profile";
import Information from "../components/Information";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <Information />
      <ArtsContainer />
      <Footer />
    </div>
  );
};

export default Home;
