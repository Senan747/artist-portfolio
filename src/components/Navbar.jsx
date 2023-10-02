import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-gega-navbar flex flex-row justify-between items-center top-0 sticky p-4">
      <div className="w-[80px] h-[80px]">
        <img src="/logo-2.png" alt="" />
      </div>
      <div className="flex flex-row justify-between gap-20">
        <div className="text-xl text-gega-dark-red font-semibold">
          <Link to={"#arts"}></Link>
          Ana səhifə
        </div>
        <div className="text-xl text-gega-dark-red font-semibold">Haqqında</div>
        <div className="text-xl text-gega-dark-red font-semibold">
          <Link to={"#arts"}>Rəsimlər</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
