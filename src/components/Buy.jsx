import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal, TextField, TextareaAutosize } from "@mui/material";
import { t } from "i18next";

function ContactUs({ open, onClose, closeSnackbar }) {
  const form = useRef();
  const { art } = useSelector((state) => state.art);

  const message = `Əsərin adı: ${t(`data.${art}.name`)}`;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rjl7wr",
        "template_gxqfhy9",
        form.current,
        "5e7EHxJiEnf_go9bv"
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
            label="Ad"
            id="user_name"
            name="user_name"
            variant="outlined"
            required
          />
          <TextField
            label="Mailinizi qeyd edin"
            id="user_email"
            name="user_email"
            variant="outlined"
            required
          />
          <TextField
            label="Mesajınızı qeyd edin"
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
            Gönder
          </Button>
        </form>
        <p className="font-Inter">Və ya</p>
        <Button variant="outlined" color="primary" className="w-full">
          <a href="tel:+994507832995">Zəng edin</a>
        </Button>
      </div>
    </Modal>
  );
}

export default ContactUs;
