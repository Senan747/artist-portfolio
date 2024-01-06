import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTranslation } from "react-i18next";

export default function SnackbarComponent({ openSnackbar, handleClose }) {
  const {t} = useTranslation()
  return (
    <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        {t("send_suc")}
      </Alert>
    </Snackbar>
  );
}
