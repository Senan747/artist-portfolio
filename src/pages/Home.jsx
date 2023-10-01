import React from "react";
import Navbar from "../components/Navbar";
import Arts from "../components/Arts";
import Profile from "../components/Profile";
import Information from "../components/Information";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <Information />
      <Arts />
    </div>
  );
};

export default Home;
