import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackbarComponent({ openSnackbar, handleClose }) {
  return (
    <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Mesaj göndərildi!
      </Alert>
    </Snackbar>
  );
}
