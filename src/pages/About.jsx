import React from "react";
import Profile from "../components/Profile";
import Information from "../components/Information";
import Interview from "../components/Interview";
import { motion } from "framer-motion";
import videoData from "../../videoData.json";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full flex items-center justify-center flex-col gap-20 max-md:gap-5"
    >
      <Profile />
      <Information />
      <h1 className="text-4xl font-semibold font-Inter">{t("about_1")}</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%] mx-auto py-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {videoData.map((video) => (
          <motion.iframe
            key={video.id}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
            src={video.url}
            title={`YouTube video player ${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            variants={item}
          ></motion.iframe>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default About;
