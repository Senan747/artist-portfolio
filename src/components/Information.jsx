import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import career from "../../career.json";

function Information() {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? career : career.slice(0, 3);

  return (
    <>
      <div className="w-full flex flex-col justify-between items-start mt-10 gap-5 max-md:mt-1">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-row justify-around items-start mt-10 gap-5 max-md:mt-1 relative"
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
          </div>
        ))}
        {!showAll && (
          <div className="w-[94%] flex items-center justify-center">
            <div className="cursor-pointer font-semibold">
              <button
                onClick={() => setShowAll(true)}
                className="flex items-center justify-around ml border-2 border-gega-red rounded-xl p-2 gap-2 hover:bg-gega-red hover:text-white duration-300"
              >
                Daha çoxu
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Information;
