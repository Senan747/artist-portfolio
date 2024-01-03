import React, { useState, useEffect } from "react";
import { Dialog } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useTranslation } from "react-i18next";

const Information = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const [selectedImage, setSelectedImage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const data = [];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(!openDialog);
  };

  for (let i = startIndex; i < endIndex; i++) {
    data.push(
      <div
        key={i}
        className="w-full flex flex-row justify-around items-start mt-10 gap-48 max-md:mt-1 relative"
      >
        <div className="w-[90%] h-[1px] absolute bg-gega-black text-center"></div>
        <div className="font-Cairo pt-10 max-md:px-3  ">
          <p className="text-3xl max-md:text-xl">Kariyera</p>
          <p className="text-2xl max-md:text-lg"> {t(`career.${i}.year`)}</p>
        </div>
        <div className="flex flex-col w-[50%] pt-10">
          <p className="text-lg font-Inter pb-3 max-md:text-sm">
            {t(`career.${i}.content`)}
          </p>
          <div>
            <div className="w-[20%] max-lg:w-[150px] h-auto">
              <img
                src={t(`career.${i}.images`)}
                alt=""
                className="w-full cursor-pointer"
                onClick={() => handleSelectedImage(t(`career.${i}.images`))}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-between items-start mt-10 gap-5 max-md:mt-1">
      {data}
      <div
        key="button"
        className="w-full mt-10 flex items-center justify-center"
      >
        <Pagination
          count={32 / itemsPerPage}
          variant="outlined"
          page={page}
          onChange={handleChange}
          size="meduim"
        />
      </div>
      <Dialog open={openDialog} onClose={closeDialog}>
        <img src={selectedImage} alt="" />
      </Dialog>
    </div>
  );
};

export default Information;
