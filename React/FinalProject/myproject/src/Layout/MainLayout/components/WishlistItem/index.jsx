import Link from "antd/es/typography/Link";
import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../../../../Contexts/CardContext";
import { WishlistContext } from "../../../../Contexts/WishlistContext";

const WishlistItem = ({ item }) => {
  const { productId, product } = item;

  const { title, productPrice, images } = product || {};

  const firstImage = images && images.length > 0 ? images[0] : [];
  const imageUrl = firstImage ? firstImage.url : [];

  const {removeFromWishlist}=useContext(WishlistContext)

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4">
        <Link to={`/product/${productId}`}>
          <img className="max-w-[60px]" src={imageUrl} alt="" />
        </Link>

        <div className="w-full flex justify-between">
          <div className="flex flex-col items-start gap-2">
            <Link
              to={`/product/${productId}`}
              className="text-sm font-medium uppercase max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="flex-1 flex items-center justify-around ">
              ${productPrice}
            </div>
          </div>
          <div
            onClick={() => removeFromWishlist(productId)}
            className="text-xl cursor-pointer"
          >
            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
