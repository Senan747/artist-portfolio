import React, { useRef, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SnackbarComponent from "../components/SnackbarComponent";

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const form = useRef();
  const handleClose = () => {
    setOpenSnackbar(!openSnackbar);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rjl7wr",
        "template_gxqfhy9",
        form.current,
        "5e7EHxJiEnf_go9bv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleClose();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-h-screen flex items-center justify-around flex-row pt-44"
    >
      <div className="w-[500px] max-md:p-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-2 w-full"
        >
          <label className="text-gega-red">Ad</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <label className="text-gega-red">Mailinizi qeyd edin</label>
          <input
            required
            type="email"
            id="user_email"
            name="user_email"
            className="border rounded-md px-3 py-2 pr-20 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label className="text-gega-red">Mesajınızı qeyd edin</label>
          <textarea
            required
            id="message"
            name="message"
            rows="4"
            className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>

          <button
            type="submit"
            className="bg-gega-red text-white rounded-md py-2 px-4"
          >
            Göndər
          </button>
        </form>
      </div>
      <div className="flex flex-col space-y-4 max-md:hidden">
        <div className="flex items-center space-x-2">
          <FaInstagram className="text-2xl text-pink-500" />
          <div className="text-lg">Instagram</div>
        </div>
        <div className="flex items-center space-x-2">
          <FaFacebook className="text-2xl text-blue-600" />
          <div className="text-lg">Facebook</div>
        </div>
        <div className="flex items-center space-x-2">
          <GrMapLocation className="text-2xl text-green-500" />
          <div className="text-lg">Address</div>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlinePhone className="text-2xl text-blue-700" />
          <div className="text-lg">Mobil</div>
        </div>
      </div>
      <SnackbarComponent
        openSnackbar={openSnackbar}
        handleClose={handleClose}
      />
    </motion.div>
  );
}

export default Contact;
