import { createContext, useState } from "react";

const addCartItems = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem)
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, product) => {
    const existingCartItem = cartItems?.find(cartItem => cartItem.id === product.id);
    console.log(existingCartItem);
    if (existingCartItem?.quantity === 1) return cartItems.filter(item => item.id !== product.id);
    return cartItems?.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
}

const deleteItemFromCart = (cartItems, product) => {
    return cartItems.filter(item => item.id !== product.id)
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { }
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);


    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd))
    }

    const removeItem = (product) => {
        setCartItems(removeCartItem(cartItems, product))
    }

    const deleteItem=(product) => {
        setCartItems(deleteItemFromCart(cartItems, product))
    }


    const totalCartCount = cartItems?.reduce((total, product) => (total = total + product.quantity), 0);

    const totalCartAmount = cartItems?.reduce((total, product) => (total = total + product.quantity*product.price), 0).toFixed(2);


    const value = { isCartOpen, setIsCartOpen, cartItems, addItemsToCart, totalCartCount, removeItem,deleteItem,totalCartAmount }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}