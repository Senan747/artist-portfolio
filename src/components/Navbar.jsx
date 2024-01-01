import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Language } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { Home, Info, Phone, Photo } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { motion, useScroll } from "framer-motion";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const handleClose = () => {
    setShowMenu(!showMenu);
  };

  const handleLangClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-gega-navbar flex flex-row justify-center items-center  top-0 fixed p-4 max-md:p-2 w-screen z-20 font-Inter">
      <div className="flex flex-row justify-around max-md:justify-between max-md:px-4 items-center w-full relative">
        <div className="w-[80px] h-[80px] max-md:w-[60px] max-md:h-[60px]">
          <img src="/logo-2.png" alt="" />
        </div>

        <div
          className="hidden max-md:block cursor-pointer relative mr-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>
        <div className={`flex flex-row justify-between gap-20 max-md:hidden`}>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={``}>{t("menu.home")}</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={`/about`}>{t("menu.about")}</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={`/arts`}>{t("menu.photos")}</Link>
          </div>
          <div className="text-xl text-gega-dark-red font-semibold">
            <Link to={`/contact`}>{t("menu.contact")}</Link>
          </div>

          <select
            name="language"
            id=""
            defaultValue={i18n.language}
            className="bg-gega-navbar outline-none"
            onChange={(e) => handleLangClick(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="az">AZ</option>
            <option value="tr">TR</option>
          </select>
        </div>
      </div>
      <motion.div
        className="fixed top-28 max-md:top-[72px] z-20 left-0 right-0 h-1 bg-gega-earth transform-origin-0"
        style={{ scaleX: scrollYProgress }}
      />

      <Drawer onClose={handleClose} open={showMenu} anchor="right">
        <div
          className={`flex flex-col justify-between items-start gap-10 p-20 font-Inter`}
        >
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={``} className="flex items-center gap-2">
              <Home /> {t("menu.home")}
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={`/about`} className="flex items-center gap-2">
              <Info />
              {t("menu.about")}
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={`/arts`} className="flex items-center gap-2">
              <Photo />
              {t("menu.photos")}
            </Link>
          </div>
          <div className="text-base text-gega-dark-red font-semibold">
            <Link to={`/contact`} className="flex items-center gap-2">
              <Phone />
              {t("menu.contact")}
            </Link>
          </div>
          <div
            className="text-xl text-gega-dark-red font-semibold cursor-pointer "
            onClick={() => handleLangClick()}
          >
            <div className="flex items-center justify-center gap-2">
              <Language />
              <select
                name="language"
                id=""
                defaultValue={i18n.language}
                className="bg-gega-navbar outline-none"
                onChange={(e) => handleLangClick(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="az">AZ</option>
                <option value="tr">TR</option>
              </select>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
