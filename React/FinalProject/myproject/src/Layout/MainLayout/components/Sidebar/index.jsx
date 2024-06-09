import React, { useContext } from "react";
import { SidebarContext } from "../../../../Contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "./../../../../Contexts/CardContext";
import BasketItem from "./../BasketItem/index";
import { FiTrash2 } from "react-icons/fi";
import { Empty } from "antd";
import { empty } from "../../../../assets/Images";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { basket, clearCart, itemAmount, total } = useContext(CartContext);
  console.log(basket)

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full z-40 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold text-sm ">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center transition-all duration-500"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {basket && basket.length > 0 ? (
        <div className="flex flex-col gap-y-2 h-[320px] lg:h-[320px] overflow-y-auto overflow-x-hidden border-b">
          {basket.map((item) => {
            return (
              <BasketItem key={item._id} item={item} />
            );
          })}
        </div>
      ) : (
        <Empty
          className="flex items-center justify-center flex-col text-sm"
          description="Your Cart is Empty"
          image={empty}
        />
      )}

      <div className="flex flex-col gap-y-2 py-2 mt-2">
        <div className="w-full flex justify-between items-center bg-red-200">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Link
            to="/viewcart"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            ViewCart
          </Link>
          <Link
            to="/checkout"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
