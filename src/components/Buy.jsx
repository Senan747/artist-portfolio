import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Modal, TextField, TextareaAutosize } from "@mui/material";

function ContactUs({ open, onClose }) {
  const form = useRef();
  const { art } = useSelector((state) => state.art);
  let navigate = useNavigate();

  const message = `Əsərin adı: ${art.name}.`;

  useEffect(() => {
    if (art.name === undefined) {
      navigate("/");
    }
  }, [art.name, navigate]);

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
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Modal open={open} onClose={onClose} style={modalStyle}>
      <div className="bg-gega-white flex items-center justify-center flex-col gap-4 border-4 rounded-lg p-8 min-w-[400px]">
        <div
          className="absolute -top-4 -right-5 rounded-[100%] w-10 h-10 bg-gega-dark-red flex items-center justify-center cursor-pointer"
          onClick={onClose}
        >
          <p className="text-gega-white">X</p>
        </div>
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
            value={message}
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
        <h1>Və ya</h1>
        <Button variant="outlined" color="primary" className="w-full">
          <a href="tel:+994507832995">Zəng edin</a>
        </Button>
      </div>
    </Modal>
  );
}

export default ContactUs;
