import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full bg-gega-green text-gega-white p-4 pb-10 mt-10">
      <div className="container mx-auto">
        <p className="mb-4">
          Vebsayt{" "}
          <a className="text-gega-white underline" href="https://my-portfolio-2-flax.vercel.app/">Sənan Məmmədov</a>{" "}
          tərəfindən yaradılıb
        </p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center mb-2">
              <AiOutlineMail className="mr-2" /> Email: 1senanmemmedov@gmail.com
            </p>
            <p className="flex items-center">
              <AiOutlinePhone className="mr-2" /> Phone: +994 (50) 783-2995
            </p>
            <p className="flex items-center">
              <AiOutlineHome className="mr-2" /> Address: 123 Beauty Ave, City, State, Country
            </p>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="flex items-center mr-4">
                <FaFacebook className="mr-2" /> <a className="text-gega-white underline" href="#">Facebook</a>
              </li>
              <li className="flex items-center mr-4">
                <FaInstagram className="mr-2" /> <a className="text-gega-white underline" href="#">Instagram</a>
              </li>
              <li className="flex items-center">
                <FaTwitter className="mr-2" /> <a className="text-gega-white underline" href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
