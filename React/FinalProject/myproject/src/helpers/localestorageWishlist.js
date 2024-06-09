
export const getWishlistFromLocalStorage = () => {
    const wishlistData = localStorage.getItem("wishlist");
    return wishlistData ? JSON.parse(wishlistData) : null;
  };
  
  export const saveWishlistToLocalStorage = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };
  