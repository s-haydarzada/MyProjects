import React from "react";
import { FaPlus } from "react-icons/fa";


const AddBasket = () => {
  return (
    <div className="w-[120px] h-[40px] border-b-slate-300 border-b-2 gap-2 text-black flex items-center justify-center">
      <FaPlus />
      <span>Add to cart</span>
    </div>
  );
};

export default AddBasket;
