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
          <div
            key={index}
            className="w-full flex flex-row justify-around items-start mt-10 gap-48 max-md:mt-1 relative"
          >
            <div className="w-[90%] h-[1px] absolute bg-gega-black text-center"></div>
            <div className="font-Cairo pt-10">
              <p className="text-3xl max-md:text-xl">Kariyera</p>
              <p className="text-2xl max-md:text-lg">{item.year}</p>
            </div>
            <div className="flex flex-col w-[50%] pt-10">
              <p className="text-lg font-Inter pb-3">{item.content}</p>
              <div>
                <div className="w-[20%] h-auto">
                  <img src={item.images} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div key="button" className="w-full mt-10 flex items-center justify-center">
          <Pagination
            count={Math.ceil(career.length / itemsPerPage)}
            variant="outlined"
            page={page}
            onChange={handleChange}
            size="meduim"
          />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Information;
