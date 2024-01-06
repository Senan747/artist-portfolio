import React, { useRef, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import SnackbarComponent from "../components/SnackbarComponent";
import { useTranslation } from "react-i18next";

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { t } = useTranslation();
  const form = useRef();
  const handleClose = () => {
    setOpenSnackbar(!openSnackbar);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8h5lmy",
        "template_cbd7skf",
        form.current,
        "unDSS9eMCr3nnWQzO"
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
          <label className="text-gega-red">{t("contact_1")}</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <label className="text-gega-red">{t("contact_2")}</label>
          <input
            required
            type="email"
            id="user_email"
            name="user_email"
            className="border rounded-md px-3 py-2 pr-20 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label className="text-gega-red">{t("contact_3")}</label>
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
            {t("contact_4")}
          </button>
        </form>
      </div>
      <div className="flex flex-col space-y-4 max-md:hidden">
        <div className="flex items-center space-x-2">
          <FaInstagram className="text-2xl" />
          <a
            className="text-lg"
            href="https://www.instagram.com/artintiqam?igsh=ZHRqMnZnZGRmajdm"
          >
            Instagram/@artintiqam
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaFacebook className="text-2xl " />
          <a href="https://www.facebook.com/artintiqam" className="text-lg">
            Facebook/@artintiqam
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <GrMapLocation className="text-2xl" />
          <a
            href="https://www.google.com/maps?q=40.6040828,49.6622281&z=17&hl=az"
            className="text-lg"
          >
            25-ci məhəllə,Natavan küçəsi,Sumqayıt
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <GrMapLocation className="text-2xl" />
          <a
            href="https://maps.google.com/?cid=3541925360965770305&entry=gps"
            className="text-lg"
          >
            Şeyx Şamil Küç-3, İçərişəhər metrosu, Bakı
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlinePhone className="text-2xl" />
          <a href="tel:+994 55 979 81 71" className="text-lg">
            +994 55 979 81 71
          </a>
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
