import React from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col items-center w-[150px] rounded-lg relative z-30">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-transparent p-2 w-full flex items-center justify-around gap-1 text-sm rounded-lg tracking-wider border-4 border-transparent"
        >
          <div className="flex items-center gap-2">
            <FaUserCircle />
            Setting
          </div>

          {isOpen ? (
            <AiOutlineCaretUp className="h-8" />
          ) : (
            <AiOutlineCaretDown className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="absolute bg-white border-[1px] border-gray-300 top-14 right-0 flex flex-col items-start rounded-lg px-2 w-[250px] duration-100">
            <ul className="flex w-full flex-col justify-start p-2">
              <li className="h-[30px] flex items-center">
                <Link to="/checkout">Checkout</Link>
              </li>
              <li className="h-[40px] flex items-center">
                <Link to="/login">Login</Link>
              </li>
              <li className="h-[40px] flex items-center">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="md:hidden sm:flex flex-col items-center w-[150px] rounded-lg relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-transparent p-2 w-full flex items-center justify-around gap-1 text-sm rounded-lg tracking-wider border-4 border-transparent"
        >
          <div className="flex items-center gap-2">
            <FaUserCircle />
            Setting
          </div>

          {isOpen ? (
            <AiOutlineCaretUp className="h-8" />
          ) : (
            <AiOutlineCaretDown className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="sm:absolute bg-white border-[1px] border-gray-300 right-2 top-14  fixed flex flex-col items-start rounded-lg px-2 w-[150px] duration-100">
            <ul className="flex w-full flex-col justify-start p-2">
              <li className="h-[30px] flex items-center">
                <Link to="/checkout">Checkout</Link>
              </li>
              <li className="h-[40px] flex items-center">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
