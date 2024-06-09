import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Dropdown from "../Dropdown/index";

const ContactInfo = () => {
  return (
    <>
      <div className="hidden md:flex justify-between items-center min-h-full w-full bg-[#f6f6f6] px-12 ">
        <div className="md:flex items-center gap-10 text-sm">
          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            123 456 789
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineMail />
            info@domain.com
          </div>
          <div className="flex items-center gap-7 text-lg">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <MdOutlineRssFeed />
            </a>
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <Dropdown />
      </div>
      <div className="md:hidden flex flex-col justify-center items-center w-full py-5">
        <Dropdown />
        <div className="flex flex-col items-center justify-center text-sm">
          <div className="flex items-center gap-1">
            <FaPhoneAlt />
            123 456 789
          </div>
          <div className="flex items-center gap-1 py-2">
            <HiOutlineMail />
            info@domain.com
          </div>
          <div className="flex items-center justify-between gap-5 mt-2 text-sm">
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <MdOutlineRssFeed />
            </a>
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
