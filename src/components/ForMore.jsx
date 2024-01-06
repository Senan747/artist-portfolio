import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function ForMore() {
  const { t } = useTranslation();
  return (
    <div className="w-[94%] flex items-end justify-end">
      <div className="cursor-pointer font-semibold">
        <Link
          to="/arts"
          className="flex items-center justify-around ml border-2 border-gega-red rounded-xl p-2 gap-2 hover:bg-gega-red hover:text-white duration-300"
        >
          <div>{t("for-more")}</div>
          <div>
            <AiOutlineArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ForMore;
