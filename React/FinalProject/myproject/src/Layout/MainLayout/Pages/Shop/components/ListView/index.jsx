import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { ProductContext } from "../../../../../../Contexts/ProductContext";

function ListView({ product }) {
  const { addToBasket } = useContext(CartContext);
  const { calculateDiscountPercentage } = useContext(ProductContext);

  const { images, productPrice, salePrice, title, _id, stock, description } =
    product;
  const firstImage = images && images.length > 0 ? images[0] : [];
  const imageUrl = firstImage ? firstImage.url : [];

  const discountPercentage = calculateDiscountPercentage(product);
  const roundedDiscount = Math.round(discountPercentage);

  const showDiscount = salePrice && discountPercentage > 0;

  return (
    <div className="flex justify-between w-full">
      <div className="w-1/3">
        <div className="relative">
          <Link to={`/product/${product._id}`}>
            <img
              className="h-[270px] w-full object-cover"
              src={imageUrl}
              alt=""
            />
          </Link>
          {showDiscount && (
            <>
              <p className="absolute top-0 left-0 bg-black text-white w-16 h-8 z-10 text-center flex justify-center items-center">
                -{roundedDiscount}%
              </p>
              <p className="absolute top-0 right-0 bg-[#8a8f6a] text-white w-16 h-8 z-10 text-center flex justify-center items-center">
                Sale
              </p>
            </>
          )}
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between p-4">
        <div>
          <Link to={`/product/${product._id}`}>
            <h2 className="font-semibold mb-2">{title}</h2>
          </Link>
          <div className="flex gap-6 items-center text-black text-sm py-2">
            {salePrice ? (
              <>
                <span>${salePrice}</span>
                <span className="line-through">${productPrice}</span>
              </>
            ) : (
              <span>${productPrice}</span>
            )}
          </div>
        </div>
        <button
          onClick={() => addToBasket(_id, 1, product)}
          className="py-3 w-[100px] text-black hover:underline hover:text-black duration-300"
        >
          + Add to cart
        </button>
        <div className="mt-4">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}


export default ListView;