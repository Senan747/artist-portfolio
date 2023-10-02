import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full bg-gega-green text-gega-white">
      <div>
        <p>
          Vebsayt{" "}
          <a href="https://my-portfolio-2-flax.vercel.app/">Sənan Məmmədov</a>{" "}
          tərəfindən yaradılıb
        </p>
      </div>
      <div className="flex flex-col">
        <p className="flex flex-col">
          <p>
            <AiOutlineMail />{" "}
          </p>
          <p>Email: 1senanmemmedov@gmail.com</p>
        </p>
        <p>
          <AiOutlinePhone /> Phone: +994 (50) 783-2995
        </p>
        <p>
          <AiOutlineHome /> Address: 123 Beauty Ave, City, State, Country
        </p>
      </div>

      <div className="flex flex-col">
        <ul>
          <li className="flex items-center">
            <FaFacebook /> <a href="#">Facebook</a>
          </li>
          <li className="flex items-center">
            <FaInstagram /> <a href="#">Instagram</a>
          </li>
          <li className="flex items-center">
            <FaTwitter /> <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
