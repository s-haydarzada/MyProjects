import React, { useContext, useState } from "react";
import { WishlistContext } from "../../../../Contexts/WishlistContext";
import { IoMdArrowForward } from "react-icons/io";
import { Empty } from "antd";
import { FiTrash2 } from "react-icons/fi";
import { empty } from "../../../../assets/Images";
import WishlistItem from "../WishlistItem";

const Wishlist = () => {
  const { opened, handledClose, wishlist, wishlistAmount } =
    useContext(WishlistContext);

  return (
    <div
      className={`${
        opened ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full z-40 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase font-semibold text-sm ">
          Wishlist Cart ({wishlistAmount})
        </div>
        <div
          onClick={handledClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center transition-all duration-500"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {wishlist && wishlist.length > 0 ? (
        <div className="flex flex-col gap-y-2 h-[320px] lg:h-[320px] overflow-y-auto overflow-x-hidden border-b">
          {wishlist.map((item) => {
            return <WishlistItem key={item._id} item={item} />;
          })}
        </div>
      ) : (
        <Empty
          className="flex items-center justify-center flex-col text-sm"
          description="Your Cart is Empty"
          image={empty}
        />
      )}

      {/* <div className="flex flex-col gap-y-2 py-2 mt-2">
        <div className="w-full flex justify-between items-center bg-red-200">
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Wishlist;
