import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Buy from "../components/Buy";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SnackbarComponent from "../components/SnackbarComponent";

function Art() {
  const { art } = useSelector((state) => state.art);
  const [showBuy, setShowBuy] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowBuy(!showBuy);
  };

  const handleClose = () => {
    setOpenSnackbar(!openSnackbar);
  };
  useEffect(() => {
    if (art == []) {
      navigate("/");
    }
  }, [art]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 max-md:pt-24 pb-10"
    >
      <div className="flex items-center flex-row max-md:flex-col justify-around">
        <div className="">
          <img
            src={`/intiqam_${art.id}_big.webp`}
            alt=""
            className="max-w-md  shadow-xl"
            style={{ boxShadow: "0 15px 29px rgba(80, 20, 50, 0.6)" }} // Add this line for the shadow
          />
        </div>

        <div className="text-justify">
          <h1 className="text-3xl font-semibold mb-2">
            Əsərin adı: {art.name}
          </h1>
          <h1 className="text-xl font-medium mb-2">Rəssam: {art.author}</h1>
          <h1 className="text-lg font-normal mb-2">
            Ölçülər: {art.dimensions}
          </h1>
          <h1 className="text-lg font-normal mb-2">
            Üsul və boyama: {art.technique}
          </h1>
          <h1 className="text-lg font-normal mb-4">Tarix: {art.year}</h1>

          <button
            className="px-9 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            onClick={handleClick}
          >
            Al
          </button>
        </div>
      </div>
      <Buy
        open={showBuy}
        onClose={handleClick}
        openSnackbar={openSnackbar}
        closeSnackbar={handleClose}
      />
      <SnackbarComponent
        openSnackbar={openSnackbar}
        handleClose={handleClose}
      />
    </motion.div>
  );
}

export default Art;
