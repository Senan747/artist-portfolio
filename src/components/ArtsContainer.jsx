import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ForMore from "./ForMore";

function Arts() {
  const imageElements = [];
  let location = useLocation();
  let count;
  if(location.pathname === "/resmler"){
    count = 43;
  } else {
    count = 13
  }
  console.log(location.pathname)

  for (let i = 1; i < count; i++) {
    imageElements.push(
      <div key={i} className="m-5">
        <img src={`/intiqam_${i}_big.webp`} alt="" />
      </div>
    );
  }

  return (
    <div id="#arts" className="mt-20 w-[1400px]">
      <h1 className="font-Josefin text-7xl text-center pb-10 text-gega-green">
        Əsərlər
      </h1>
      <div className="">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4 }}
          className="max-w-[1400px] mx-20"
        >
          <Masonry>{imageElements}</Masonry>
        </ResponsiveMasonry>
      </div>
      <ForMore />
    </div>
  );
}

export default Arts;
