import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Buy from "../components/Buy";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SnackbarComponent from "../components/SnackbarComponent";
import { useTranslation } from "react-i18next";

function Art() {
  const { art } = useSelector((state) => state.art);
  const [showBuy, setShowBuy] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    setShowBuy(!showBuy);
  };

  const handleClose = () => {
    setOpenSnackbar(!openSnackbar);
  };
  useEffect(() => {
    if (art === "") {
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
            src={`/intiqam_${art}_big.webp`}
            alt=""
            className="max-w-md  shadow-xl"
            style={{ boxShadow: "0 15px 29px rgba(80, 20, 50, 0.6)" }} // Add this line for the shadow
          />
        </div>

        <div className="text-justify max-md:mt-10">
          <h1 className="text-3xl font-semibold mb-2">
            {t("art_name")}: {t(`data.${art}.name`)}
          </h1>
          <h1 className="text-xl font-medium mb-2">
            {t("artist")}: {t(`data.${art}.author`)}
          </h1>
          <h1 className="text-lg font-normal mb-2">
            {t("dimension")}: {t(`data.${art}.dimensions`)}
          </h1>
          <h1 className="text-lg font-normal mb-2">
            {t("style")}: {t(`data.${art}.technique`)}
          </h1>
          <h1 className="text-lg font-normal mb-4">
            {t("date")}: {t(`data.${art}.year`)}
          </h1>

          <button
            className="px-9 py-2 bg-gega-red text-white rounded-full"
            onClick={handleClick}
          >
            {t("buy")}
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
