import React, { useContext } from "react";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const ViewCartItem = ({ item }) => {
  const { product, productId, productCount } = item;
  const { id, title, images, productPrice } = product;
  const firstImage = images && images.length > 0 ? images[0] : [];
  const imageUrl = firstImage ? firstImage.url : [];

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <section className="flex gap-x-4 py-2 lg:px-6 border-gray-200 font-light text-gray-500">
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 w-full">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <Link to={`/product/${productId}`}>
            <img
              className="max-w-[80px] mx-5 text-center p-3"
              src={imageUrl}
              alt=""
            />
          </Link>
        </th>
        <td class="px-6 py-4">
          <Link
            to={`/product/${productId}`}
            className="text-sm ml-5 font-medium uppercase max-w-[240px] text-primary hover:underline"
          >
            {title}
          </Link>
        </td>
        <td class="px-6 py-4">
          <p>$ {productPrice}</p>
        </td>
        <td class="px-6 py-4">
          <div className="flex flex-1 max-w-[100px] items-center h-full text-primary font-medium">
            <div
              onClick={() => decreaseAmount(productId)}
              className="flex-1 flex justify-center items-center cursor-pointer h-full"
            >
              <IoMdRemove />
            </div>
            <div className="h-full flex justify-center items-center px-2">
              {productCount}
            </div>
            <div
              onClick={() => increaseAmount(id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>
        </td>
        <td class="px-6 py-4">
        <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
          productPrice * productCount
        ).toFixed(2)}`}</div>
        </td>
        <td class="px-6 py-4">
        <button
          onClick={() => removeFromCart(id)}
          className="text-xl cursor-pointer"
        >
          <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
        </button>
        </td>
      </tr>
    </section>
  );
};

export default ViewCartItem;
