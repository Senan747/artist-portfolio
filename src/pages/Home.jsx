import React from "react";
import { motion } from "framer-motion";
import ArtsContainer from "../components/ArtsContainer";
import { useTranslation } from "react-i18next";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="">
      <Profile />
      <ArtsContainer />
    </motion.div>
  );
};

export default Home;
