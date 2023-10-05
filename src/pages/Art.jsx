import React from "react";
import data from "../../db.json";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Art() {
  const { art } = useSelector((state) => state.art);
  let location = useLocation();
  console.log(art);
  return <div>
    {art.name}
    {art.author}
    
    </div>;
}

export default Art;
