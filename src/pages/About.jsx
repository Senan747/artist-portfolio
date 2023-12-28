import React from "react";
import Profile from "../components/Profile";
import Information from "../components/Information";
import Interview from "../components/Interview";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex items-center justify-center flex-col gap-20 max-md:gap-5"
    >
      <Profile />
      <Information />
      <h1 className="text-4xl font-semibold font-Inter">Interviews</h1>
      <Interview />
    </motion.div>
  );
}

export default About;
