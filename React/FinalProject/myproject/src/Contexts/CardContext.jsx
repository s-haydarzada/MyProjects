import React, { createContext, useContext, useEffect, useState } from "react";
import { AddNewBasket, GetBasket } from "./../services/products";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

const CardProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const { user } = useContext(AuthContext);


  //Total

  useEffect(() => {
    const total = basket.reduce((acc, curr) => {
      const price = curr.product?.salePrice || curr.product?.productPrice || 0;
      return acc + price * curr.productCount;
    }, 0);
    setTotal(total);
  }, [basket]);

  //ProductCount

  useEffect(() => {
    if (basket) {
      const productCount = basket.reduce((acc, currentItem) => {
        return acc + currentItem.productCount;
      }, 0);
      setItemAmount(productCount);
    }
  }, [basket]);


//Add to Basket

  const addToBasket = async (productId, productCount, product) => {
    const existingProductIndex = basket.findIndex(
      (item) => item.productId === productId
    );

    if (existingProductIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex].productCount += productCount;
      setBasket(updatedBasket);
    } else {
      const updatedBasket = [...basket, { productId, productCount, product }];
      console.log(updatedBasket)
      setBasket(updatedBasket);


      // if (user) {
      //   await postBasketData(updatedBasket);
      //   clearLocalStorage();
      // } else {
      //   updateLocalStorage({ productId, productCount });
      // }
    }
  };

//Post request to Basket

  const postBasketData = async (updatedBasket) => {
    try {
      const response = await AddNewBasket({ basket: updatedBasket });
      setBasket(response)
      console.log(response);
      clearLocalStorage();
    } catch (error) {
      console.log(error);
    }
  };

//Update localStorage

  const updateLocalStorage = (item) => {
    const localStorageItems = JSON.parse(localStorage.getItem("basket")) || [];
    localStorageItems.push(item);
    localStorage.setItem("basket", JSON.stringify(localStorageItems));
  };

  //Clear LocalStorage

  const clearLocalStorage = () => {
    localStorage.removeItem("basket");
  };

  //Get Basket Data

  // useEffect(() => {
  //   const getBasketData = async () => {
  //     try {
  //       if (user) {
  //         const res = await GetBasket();
  //         console.log(res.data);
  //         setBasket(res.data);
  //         clearLocalStorage();
  //       } else {
  //         const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
  //         setBasket(storedBasket);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
    
  //   getBasketData();
  // }, [user]);
  

  //Remove from Basket

  const removeFromCart = (id) => {
    const newCart = basket.filter((item) => {
      return item.productId !== id;
    });
    setBasket(newCart);
  };

  //Clear Basket

  const clearCart = () => {
    setBasket([]);
  };

  const increaseAmount = (id) => {
    const cartItem = basket.find((item) => item.productId === id);
    addToBasket(id, 1, cartItem.product);
  };

  const decreaseAmount = (id) => {
    const cartItem = basket.find((item) => item.productId === id);
    if (cartItem) {
      const newCart = basket.map((item) => {
        if (item.productId === id) {
          return { ...item, productCount: cartItem.productCount - 1 };
        } else {
          return item;
        }
      });
      setBasket(newCart);
    }

    if (cartItem.productCount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        postBasketData,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;