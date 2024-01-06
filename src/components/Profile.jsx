import React from "react";
import { useTranslation } from "react-i18next";

function Profile() {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full flex items-center justify-center flex-wrap pt-28 max-md:pt-0">
      <div className="bg-gega-green flex flex-row items-center max-lg:flex-col max-md:gap-3 justify-between p-10 max-md:p-5 m-20 max-md:m-0 max-md:pt-24">
        <div className="bg-gega-white rounded-[30px] p-10">
          <div className="pb-5 flex flex-row items-center">
            <img
              src="/artist.jpg"
              alt=""
              className="rounded-50 w-[50px] h-[50px] mr-3 max-md:w-[30px] max-md:h-[30px]"
            />
            <p className="font-semibold text-lg max-lg:hidden">{t("artist")}</p>
            <p className="font-semibold hidden text-base max-lg:block">
              {t("owner")} <span className="text-xs">({t("nick")})</span>
            </p>
          </div>
          <div className="w-[300px] max-md:w-[200px]">
            <img src="/profile.webp" alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="ml-10 max-md:ml-0">
          <h1 className="font-Pacifico text-5xl text-gega-white pb-5 max-lg:hidden">
            {t("owner")}
          </h1>
          <p className="text-gega-white max-md:text-justify max-md:text-sm pt-4">
            {t("InfoAbout")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
