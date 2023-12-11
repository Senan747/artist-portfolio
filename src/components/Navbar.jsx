import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gega-navbar flex flex-row justify-center items-center  top-0 fixed p-4 w-[100vw] z-20">
      <div className="max-w-[1400px] flex flex-row justify-between items-center gap-[600px]">
        <div className="w-[80px] h-[80px]">
          <img src="/logo-2.png" alt="" />
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={"/"}> Ana səhifə</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={"/haqqında"}>Haqqında</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={"/resmler"}>Rəsmlər</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={"/elaqe"}>Əlaqə</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
