import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { Button, Modal, TextField } from "@mui/material";
import { t } from "i18next";

function ContactUs({ open, onClose, closeSnackbar }) {
  const form = useRef();
  const { art } = useSelector((state) => state.art);

  const message = `${t("art_name")}: ${t(`data.${art}.name`)}`;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a8h5lmy",
        "template_cbd7skf",
        form.current,
        "unDSS9eMCr3nnWQzO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },

        (error) => {
          console.log(error.text);
        }
      );

    closeSnackbar();
    onClose();
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Modal open={open} onClose={onClose} style={modalStyle}>
      <div className="bg-gega-white flex items-center justify-center flex-col gap-4 border-4 rounded-lg p-8 min-w-[400px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-7 w-full"
        >
          <TextField
            label={t("mes_owner")}
            id="user_name"
            name="user_name"
            variant="outlined"
            required
          />
          <TextField
            label={t("mes_mail")}
            id="user_email"
            name="user_email"
            variant="outlined"
            required
          />
          <TextField
            label={t("Mes_abt")}
            id="message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            defaultValue={message}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
          >
            {t("send")}
          </Button>
        </form>
        <p className="font-Inter">{t("or")}</p>
        <Button variant="outlined" color="primary" className="w-full">
          <a href="tel:+994507832995">{t("call")}</a>
        </Button>
      </div>
    </Modal>
  );
}

export default ContactUs;
