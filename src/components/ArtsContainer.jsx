import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import ForMore from "./ForMore";
import data from "../../db.json";
import { setArt } from "../stores/art";
import { useDispatch } from "react-redux";

function Arts() {
  const imageElements = [];
  const [photoNumber, setPhotoNumber] = useState();
  let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let count;
  if (location.pathname === "/resmler") {
    count = 43;
  } else {
    count = 13;
  }


  const handleClick = (newData) => {
    dispatch(setArt(newData));
    navigate(`/art/${newData.name}`);
  };

  for (let i = 1; i < count; i++) {
    imageElements.push(
      <div
        key={i}
        className="m-5 relative cursor-pointer"
        onMouseEnter={() => {

          setPhotoNumber(i);
        }}
        onMouseLeave={() => setPhotoNumber("")}
        onClick={() => handleClick(data[i])}
      >
        <img src={`/intiqam_${i}_big.webp`} alt="" className="relative" />
        {photoNumber === i && (
          <div className="absolute animate-height w-full h-full opacity-[0.9] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gega-white flex flex-col items-center justify-center">
            <h2 className="text-center text-gega-black font-semibold">
              {data[i].author}
            </h2>
            <h2 className="text-center text-gega-black font-semibold">
              {data[i].name}
            </h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="#arts" className="my-20 w-[1400px]">
      <h1 className="font-Josefin text-7xl text-center pb-10 text-gega-green">
        Əsərlər
      </h1>
      <div className="">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 3, 900: 3 }}
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
