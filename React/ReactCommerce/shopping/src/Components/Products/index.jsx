import React,{useContext} from 'react';
import style from "./style.module.scss";
import Button from '../Button/index';
import { CartContext } from '../../Context/CardContext';

const Products = ({ product }) => {
    const { name, price, imageUrl } = product;
    const {addItemsToCart}=useContext(CartContext)

    const addToCart =()=>addItemsToCart(product)

    return (
        <div className={style.Products}>
            <img src={imageUrl} alt={name} />
            <div className={style.content}>
                <span className={style.name}>
                    {name}
                </span>
                <span className={style.price}>
                    {price}
                </span>
            </div>
                <Button buttonType="Cart" onClick={addToCart}>Add to Cart</Button>
        </div>
    )
}

export default Products;
