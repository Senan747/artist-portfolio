import React from "react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Arts from "./Arts";
import Contact from "./Contact";
import Art from "./Art";
import About from "./About";
import ArtsContainer from '../components/ArtsContainer'

import Profile from "../components/Profile";
import Information from "../components/Information";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/resmler" element={<Arts />} />
        <Route path="/elaqe" element={<Contact />} />
        <Route path="/art/:name" element={<Art />} />
        <Route path="/haqqında" element={<About />} />
      </Routes> */}

      <Profile />
      <Information />
      <ArtsContainer />
      <Footer />
    </motion.div>
  );
};

export default Home;
