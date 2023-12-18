import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { HiMiniPhoto } from "react-icons/hi2";
import { IoIosContacts } from "react-icons/io";
import { Home, Info, Phone, Photo } from "@mui/icons-material";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-gega-navbar flex flex-row justify-center items-center  top-0 fixed p-4 max-md:p-2 w-screen z-20 font-Inter">
      <div className="flex flex-row justify-around max-md:justify-between max-md:px-4 items-center w-full relative">
        <div className="w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px]">
          <img src="/logo-2.png" alt="" />
        </div>

        <div
          className="hidden max-md:block cursor-pointer relative"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className={`flex flex-row justify-between gap-20 max-md:hidden`}>
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
      <Drawer onClose={handleClose} open={showMenu} anchor="right">
        <div className={`flex flex-col justify-between gap-10 p-20 font-Inter`}>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={"/"} className="flex items-center gap-2">
              <Home /> Ana səhifə
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={"/haqqında"} className="flex items-center gap-2">
              <Info />
              Haqqında
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={"/resmler"} className="flex items-center gap-2">
              <Photo />
              Rəsmlər
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={"/elaqe"} className="flex items-center gap-2">
              <Phone />
              Əlaqə
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
