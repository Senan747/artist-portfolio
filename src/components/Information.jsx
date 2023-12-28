import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import career from "../../career.json";

const Information = () => {
  const [scrollY, setScrollY] = useState(0);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = career.slice(startIndex, endIndex);

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

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
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
              y: { duration: 0.5 },
            }}
          >
            <div className="w-[90%] h-[1px] absolute bg-gega-black text-center"></div>
            <div className="font-Cairo pt-10">
              <p className="text-3xl max-md:text-xl">Kariyera</p>
              <p className="text-2xl max-md:text-lg">{item.year}</p>
            </div>
            <div className="flex flex-col w-[70%] pt-10">
              <p>{item.content}</p>
              <div>
                <div className="w-[60%] h-auto">
                  <img src="/sergi.jpg" alt="" className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}

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
          <Pagination
            count={Math.ceil(career.length / itemsPerPage)}
            variant="outlined"
            page={page}
            onChange={handleChange}
            size="large"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Information;
