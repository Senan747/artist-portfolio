import React, { useState } from "react";
import { motion } from "framer-motion";
import ArtsContainer from "../components/ArtsContainer";

function Arts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="#arts"
      className="pt-20 max-lg:pt-5"
    >
      <ArtsContainer />
    </motion.div>
  );
}

export default Arts;
