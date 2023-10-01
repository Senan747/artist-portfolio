import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Arts() {
  const imageElements = [];

  for (let i = 1; i < 44; i++) {
    imageElements.push(
      <div key={i} className="m-5">
        <img src={`/intiqam_${i}_big.webp`} alt="" />
      </div>
    );
  }

  return (
    <div className="mt-20">
      <h1 className="font-Josefin text-7xl text-center pb-10 text-gega-green">Əsərlər</h1>
      <div className="">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 4 }}
          className="max-w-[1400px] mx-20"
        >
          <Masonry>{imageElements}</Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default Arts;
