import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Buy from "../components/Buy";
import { useNavigate } from "react-router-dom";

function Art() {
  const { art } = useSelector((state) => state.art);
  const [showBuy, setShowBuy] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowBuy(!showBuy);
  };
  useEffect(() => {
    if (art == []) {
      navigate("/");
    }
  }, [art]);

  return (
    <div className="pt-48 max-md:pt-24 pb-10">
      <div class="flex items-center flex-row max-md:flex-col justify-around">
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
            onClick={handleClick}
          >
            Al
          </button>
        </div>
      </div>
      <Buy open={showBuy} onClose={handleClick} />
    </div>
  );
}

export default Art;
