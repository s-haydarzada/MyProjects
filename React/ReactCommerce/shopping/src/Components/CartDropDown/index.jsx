import React, { useContext } from 'react';
import style from './style.module.scss';
import Button from "../Button/index"
import { CartContext } from '../../Context/CardContext';
import { Link } from "react-router-dom"

const CartDropDown = () => {

  const { cartItems } = useContext(CartContext);
  
  return (
    <div className={style.CartDropDown}>
      {
        cartItems.map(cartItem =>
          <div className={style.cartItems} key={cartItem.id}>
            <img src={cartItem.imageUrl} alt={cartItem.name} />
            <div className={style.content}>
              <p>{cartItem.name}</p>
              <div className={style.info}>
                <span>
                  {cartItem.quantity}
                </span>
                <span>x</span>
                <span>
                  $ {cartItem.price}
                </span>
              </div>
            </div>
          </div>
        )
      }
      <Link to="/productDetail">
        <Button>Go to checkout</Button>
      </Link>
    </div>
  );
}

export default CartDropDown;
