import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function ForMore() {
  return (
    <div className="w-[94%] flex items-end justify-end">
      <div className="cursor-pointer font-semibold">
        <Link
          to="/arts"
          className="flex items-center justify-around ml border-2 border-gega-red rounded-xl p-2 gap-2 hover:bg-gega-red hover:text-white duration-300"
        >
          <div>Daha çoxu</div>
          <div>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ForMore;
