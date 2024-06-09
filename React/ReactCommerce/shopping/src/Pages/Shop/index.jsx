import React, { useContext } from 'react';
import style from './style.module.scss'
import Products from '../../Components/Products';
import { ProductContext } from './../../Context/ProductContext/index';


const Shop = () => {

  const {products}= useContext(ProductContext);
  
  return (
    <div className={style.Shop}>
      {
        products?.map(prod=><Products key={prod.id} product={prod}/>)
      }
    </div>
  );
}

export default Shop;
