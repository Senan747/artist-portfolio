import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import ForMore from "./ForMore";
import { setArt } from "../stores/art";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Arts() {
  const { art } = useSelector((state) => state.art);
  const imageElements = [];
  const { t, i18n } = useTranslation();
  const [photoNumber, setPhotoNumber] = useState();
  let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let count;
  if (location.pathname === "/arts") {
    count = 43;
  } else {
    count = 13;
  }

  const handleClick = (newData) => {
    dispatch(setArt(newData));
    navigate(`/art/${newData}`);
  };

  for (let i = 1; i < count; i++) {
    imageElements.push(
      <div
        key={i}
        className="m-5 max-md:m-2 relative cursor-pointer"
        onMouseEnter={() => {
          setPhotoNumber(i);
        }}
        onMouseLeave={() => setPhotoNumber("")}
        onClick={() => handleClick(i)}
      >
        <img
          src={`/intiqam_${i}_big.webp`}
          alt=""
          className="relative w-full h-full"
        />
        {photoNumber === i && (
          <div className="absolute animate-height w-full h-full opacity-[0.9] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gega-white flex flex-col items-center justify-center">
            <h2 className="text-center text-gega-black font-semibold">
              {t(`data.${i - 1}.author`)}
            </h2>
            <h2 className="text-center text-gega-black font-semibold">
              {t(`data.${i - 1}.name`)}
            </h2>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="#arts" className="my-20 w-full">
      <h1 className="font-Josefin text-5xl text-center py-10 text-gega-earth max-lg:text-4xl">
        {t("menu.photos")}
      </h1>
      <div className="">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 1, 500: 2, 700: 2, 900: 2, 1000: 3 }}
          className="mx-20 max-md:mx-3"
        >
          <Masonry>{imageElements}</Masonry>
        </ResponsiveMasonry>
      </div>
      {location.pathname != "/arts" && <ForMore />}
    </div>
  );
}

export default Arts;
