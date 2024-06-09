import React from 'react'
import style from "./style.module.scss";
import ProductCheckout from '../../Components/ProductCheckout/index'

const ProductDetail = () => {
    return (
        <div className={style.ProductDetail}>
            <ProductCheckout/>
        </div>
    )
}

export default ProductDetail;
