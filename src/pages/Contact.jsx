import React from "react";
import Navbar from "../components/Navbar";
import ContactContainer from "../components/ContactContainer";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}  className="">
      <ContactContainer />
    </motion.div>
  );
}

export default Contact;
