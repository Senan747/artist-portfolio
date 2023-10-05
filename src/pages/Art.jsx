import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Art() {
  const { art } = useSelector((state) => state.art);
  let location = useLocation();
  console.log(art);
  return (
    <div>
      <Navbar />
      <div class="min-h-screen flex items-center flex-row justify-around">
        <div class="mb-4">
          <img
            src={`/intiqam_${art.id}_big.webp`}
            alt=""
            class="max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div class="text-center">
          <h1 class="text-3xl font-semibold mb-2">Əsərin adı: {art.name}</h1>
          <h1 class="text-xl font-medium mb-2">Rəssam: {art.author}</h1>
          <h1 class="text-lg font-normal mb-2">Ölçülər: {art.dimensions}</h1>
          <h1 class="text-lg font-normal mb-2">
            Üsul və boyama: {art.technique}
          </h1>
          <h1 class="text-lg font-normal mb-4">Tarix: {art.year}</h1>
          <Link to="/buy">
            <button class="px-9 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              Al
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Art;
