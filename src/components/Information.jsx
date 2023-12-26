import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import career from "../../career.json";

const Information = () => {
  const [showAll, setShowAll] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibleItems = showAll ? career : career.slice(0, 3);

  return (
    <AnimatePresence>
      <div className="w-full flex flex-col justify-between items-start mt-10 gap-5 max-md:mt-1">
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-row justify-around items-start mt-10 gap-5 max-md:mt-1 relative"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            animate={{
              opacity: scrollY > 100 ? 1 : 0,
              x: 0,
              y: scrollY > 100 ? 0 : 50,
            }}
            exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }, y: { duration: 0.5 } }}
          >
            <div className="w-[90%] h-[1px] absolute bg-gega-black text-center"></div>
            <div className="font-Cairo pt-10">
              <p className="text-3xl max-md:text-xl">Kariyera</p>
              <p className="text-2xl max-md:text-lg">{item.year}</p>
            </div>
            <div className="flex flex-col w-[70%] pt-10">
              <p>{item.content}</p>
              <div>
                <div></div>
                <div className="w-[60%] h-auto">
                  <img src="/sergi.jpg" alt="" className="w-full" />
                </div>
                <div></div>
              </div>
            </div>
          </motion.div>
        ))}
        {!showAll && (
          <motion.div
            key="button"
            className="w-[94%] flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: scrollY > 100 ? 1 : 0,
              y: 0,
            }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ opacity: { duration: 0.5 }, y: { duration: 0.5 } }}
          >
            <div className="cursor-pointer font-semibold">
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center justify-around ml border-2 border-gega-red rounded-xl p-2 gap-2 hover:bg-gega-red hover:text-white duration-300"
              >
                Daha çoxunu göstər
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Information;
