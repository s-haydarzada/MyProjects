import React, { createContext, useState, useEffect } from "react";
import { saveWishlistToLocalStorage, getWishlistFromLocalStorage } from "../helpers/localestorageWishlist";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistAmount, setWishlistAmount] = useState(0);

  useEffect(() => {
    const savedWishlist = getWishlistFromLocalStorage();
    if (savedWishlist) {
      setWishlist(savedWishlist);
      setWishlistAmount(savedWishlist.reduce((total, item) => total + item.productCount, 0));
    }
  }, []);

  const addToWishlist = async (productId, productCount, product) => {
    const updatedWishlist = [...wishlist, { productId, productCount, product }];
    setWishlist(updatedWishlist);
    setWishlistAmount((prevAmount) => prevAmount + productCount);
    saveWishlistToLocalStorage(updatedWishlist);
  };

  const removeFromWishlist = (id) => {
    const removedItem = wishlist.find((item) => item.productId === id);
    if (removedItem) {
      const newWishlist = wishlist.filter((item) => item.productId !== id);
      setWishlist(newWishlist);
      setWishlistAmount((prevAmount) => prevAmount - removedItem.productCount);
      saveWishlistToLocalStorage(newWishlist);
    }
  };

  const handledClose = () => {
    setOpened(!opened);
  };

  return (
    <WishlistContext.Provider
      value={{
        opened,
        setOpened,
        handledClose,
        wishlist,
        wishlistAmount,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
