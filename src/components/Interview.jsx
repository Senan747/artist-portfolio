import React from "react";
import { motion } from "framer-motion";
import videoData from "../../videoData.json";
import { useTranslation } from "react-i18next";

export default function Interview() {
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
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-[90%] mx-auto py-20"
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
  );
}
