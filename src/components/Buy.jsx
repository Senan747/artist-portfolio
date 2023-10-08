import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeShowBuy } from "../stores/buy";

function ContactUs() {
  const form = useRef();
  const { art } = useSelector((state) => state.art);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const message = `Mən bu şəkili istəyirəm ${art.name}`;

  useEffect(() => {
    if (art.name === undefined) {
      navigate("/");
    }
  }, [1000]);

  const handleClick = () => {
    dispatch(closeShowBuy())
  }

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
    <div className="bg-gega-white flex items-center justify-center border-4 rounded-lg p-8 min-w-[400px] relative">
      <div className="absolute -top-4 -right-5 rounded-[100%] w-10 h-10 bg-gega-dark-red flex items-center justify-center cursor-pointer" onClick={handleClick}>
        <p className="text-gega-white">X</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        <label className="text-gega-red">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <label>Email</label>
        <input
          required
          type="email"
          id="user_email"
          name="user_email"
          className="border rounded-md px-3 py-2 pr-20 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        />
        <label className="text-gega-red">Message</label>
        <textarea
          required
          id="message"
          name="message"
          rows="4"
          className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
