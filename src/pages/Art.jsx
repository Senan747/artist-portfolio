import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Buy from "../components/Buy";

function Art() {
  const { art } = useSelector((state) => state.art);
  let location = useLocation();
  const [show, setShow] = useState(false);

  console.log(art);
  return (
    <div className="h-screen">
      <Navbar />
      <div class="mt-20 flex items-center flex-row justify-around">
        <div class="mb-4">
          <img
            src={`/intiqam_${art.id}_big.webp`}
            alt=""
            class="max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div class="text-justify">
          <h1 class="text-3xl font-semibold mb-2">Əsərin adı: {art.name}</h1>
          <h1 class="text-xl font-medium mb-2">Rəssam: {art.author}</h1>
          <h1 class="text-lg font-normal mb-2">Ölçülər: {art.dimensions}</h1>
          <h1 class="text-lg font-normal mb-2">
            Üsul və boyama: {art.technique}
          </h1>
          <h1 class="text-lg font-normal mb-4">Tarix: {art.year}</h1>

          <button
            class="px-9 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            onClick={() => setShow(true)}
          >
            Al
          </button>

          {show && (
            <div className=" fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-50 z-10 flex items-center justify-center">
              <div className="absolute z-20 ">
                <Buy />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Art;
