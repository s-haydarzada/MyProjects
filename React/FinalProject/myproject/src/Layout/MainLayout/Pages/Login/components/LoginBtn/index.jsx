import React from "react";
import { Link } from "react-router-dom";

const LoginBtn = ({ title, returnBtn,returnPath }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-8">
      <button
        type="submit"
        className="button mb-4 md:mb-0 w-full md:w-auto text-[18px] tracking-wider rounded bg-black text-white hover:text-yellow-50 py-3 px-10 hover:bg-[#8a8f6a] font-medium transition-colors duration-300"
      >
        {title}
      </button>

      <Link to={returnPath} className="text-lg italic text-gray-500 md:ml-3">
        {returnBtn}
      </Link>
    </div>
  );
};

export default LoginBtn;
