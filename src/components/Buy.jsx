import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

function ContactUs() {
  const form = useRef();
  const { art } = useSelector((state) => state.art);

  const message = `Mən bu şəkili istəyirəm ${art.name}`;

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

  return (
    <div className="bg-gega-white flex items-center justify-center">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col border-4 rounded-[20px]    border-gega-white p-20">
        <label className="text-gega-red">Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>{message}Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactUs;
