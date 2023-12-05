import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Information from "../components/Information";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Profile />
      <Information />
    </motion.div>
  );
}

export default About;
