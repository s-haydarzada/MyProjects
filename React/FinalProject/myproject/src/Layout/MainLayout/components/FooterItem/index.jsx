import React from "react";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoGoogleplus, IoIosSend } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../_variants";

const FooterItem = () => {
  return (
    <>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
      <div className="sm:mb-5">
        <h2 className="text-3xl font-semibold mb-4">Boyka</h2>
        <ul>
          <li className="flex gap-1 text-sm mb-2 items-center">
            <IoHome className="mr-2" />
            123 Main Street, Anytown, CA 12345 - USA.
          </li>
          <li className="flex gap-1 text-sm mb-2 items-center">
            <FaPhoneAlt className="mr-2" />
            123 456 789
          </li>
          <li className="flex gap-1 text-sm items-center">
            <MdOutlineMail className="mr-2" />
            info@domain.com
          </li>
        </ul>
        <div className="flex items-center gap-5 text-xl mt-5">
          <FaXTwitter className="hover:text-gray-400 duration-300 cursor-pointer"/>
          <IoLogoGoogleplus className="hover:text-gray-400 duration-300 cursor-pointer"/>
          <FaFacebookF className="hover:text-gray-400 duration-300 cursor-pointer"/>
          <FaYoutube className="hover:text-gray-400 duration-300 cursor-pointer"/>
        </div>
      </div>
     </motion.div>
     <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
      <div className="sm:mb-5">
        <h2 className="font-bold text-xl text-white mb-4">Products</h2>
        <ul className="cursor-pointer">
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Prices Drop
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            New Products
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Best Sales
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Contact us
          </li>
        </ul>
      </div>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
      <div className="sm:mb5">
        <h2 className="font-bold text-xl text-white mb-4">Our Company</h2>
        <ul>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Delivery
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            About us
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Wishlist
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Sitemap
          </li>
          <li className="py-2 text-sm hover:text-gray-600 duration-300 cursor-pointer">
            Stores
          </li>
        </ul>
      </div>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
      <div className="sm:mb-5">
        <h2 className="font-bold text-xl text-white mb-4">
          Join Out Newsletter Now
        </h2>
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email"
            className="text-gray-800 sm:w-64 w-full sm:mr-5 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-gray-800 hover:bg-gray-700 duration-300 px-4 py-3.5 rounded-md text-white">
            <IoIosSend />
          </button>
        </div>
        <p className="py-3 text-sm text-gray-50">Get E-mail updates about our latest shop and special offers.</p>
      </div>
      </motion.div>
    </>
  );
};

export default FooterItem;
