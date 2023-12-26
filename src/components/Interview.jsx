import React from "react";
import { motion } from "framer-motion";

export default function Interview() {
  const videoData = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/u_X8TSz67zQ?si=VvIbNaqmX4Hl5OO3",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/LmzE-twYLH8?si=fTfyplD7MSx-vK0b",
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/_AEa2p7a5XI?si=tzW5vNneuArmLr23",
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/0GUhtLqEuK8?si=A870Jwe6c0VMoBQw",
    },
    {
      id: 5,
      url: "https://www.youtube.com/embed/YXjM5QncjRo?si=arSG7HL5rLrnNEMW",
    },
    {
      id: 6,
      url: "https://www.youtube.com/embed/O3rUNT-xFNs?si=5cJaQ6w7svB5pOVH",
    },
    {
      id: 7,
      url: "https://www.youtube.com/embed/GDdBDMCZK3c?si=OS753izSVxWMTLW0",
    },
    {
      id: 8,
      url: "https://www.youtube.com/embed/0HawD_Q66do?si=YJfVI7ox0X70Qaf7",
    },
  ];
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
