import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import ForMore from "../components/ForMore";
import data from "../../db.json";
import { setArt } from "../stores/art";
import { useDispatch } from "react-redux";
import ArtsContainer from "../components/ArtsContainer";
import { motion } from "framer-motion";

function Arts() {
  const imageElements = [];
  const [photoNumber, setPhotoNumber] = useState();
  let location = useLocation();
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <div id="#arts" className="pt-28">
      <ArtsContainer />
    </div>
  );
}

export default Arts;
