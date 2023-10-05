import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BrowserRouter } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ForMore from "./ForMore";
import data from "../../db.json";

function Arts() {
  const imageElements = [];
  const [show, setShow] = useState(false);
  const [photoNumber, setPhotoNumber] = useState();
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  const { name } = useParams()
  let count;
  if (location.pathname === "/resmler") {
    count = 43;
  } else {
    count = 13;
  }
  console.log(location.pathname);

  const handleClick = (newData) => {
      
      // navigate("/art/:name")
  }

  for (let i = 1; i < count; i++) {
    imageElements.push(
      <div
        key={i}
        className="m-5"
        onMouseEnter={() => {
          setShow(true);
          setPhotoNumber(i);
        }}
        onMouseLeave={() => setShow(false)}
      >
        <img src={`/intiqam_${i}_big.webp`} alt="" />
        {photoNumber === i && (
          <div>
            <h2 onClick={handleClick(data[i])}>{data[i].author}</h2>
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
