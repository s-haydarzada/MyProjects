import React, { useContext } from 'react'
import style from "./style.module.scss";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { CartContext } from '../../Context/CardContext';

const ProductCheckout = () => {

    const { cartItems,addItemsToCart ,removeItem,deleteItem,totalCartAmount} = useContext(CartContext);

    const increase=(cartItem)=>addItemsToCart(cartItem)
    const remove=(cartItem)=>removeItem(cartItem)
    const deleteProduct=(cartItem)=>deleteItem(cartItem)

    return (
        <div className={style.container}>
            <div className={style.head}>
                <ul>
                    <li>Product</li>
                    <li>Description</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <li>Remove</li>
                </ul>
            </div>
            <div className={style.details}>
                <ul>
                    {
                        cartItems?.map(cartItem =>
                            <li key={cartItem.id}>
                                <img src={cartItem.imageUrl} alt={cartItem.name} />
                                <p>{cartItem.name}</p>
                                <div className={style.quantity}>
                                    <button onClick={()=>remove(cartItem)}>
                                        <LiaAngleLeftSolid />
                                    </button>
                                    <span>{cartItem.quantity}</span>
                                    <button onClick={()=>increase(cartItem)}>
                                        <LiaAngleRightSolid />
                                    </button>
                                </div>
                                <b>{cartItem.price}</b>
                                <button onClick={()=>deleteProduct(cartItem)}>X</button>
                            </li>
                
                        )}
                    <div className={style.total}>
                        <p>Total: ${totalCartAmount}</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ProductCheckout;
