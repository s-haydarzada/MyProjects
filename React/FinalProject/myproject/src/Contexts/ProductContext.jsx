import React, { createContext, useEffect, useState } from 'react';
import { ProductsGetAll } from '../services/products';

export const ProductContext=createContext()

const ProductProvider = ({children}) => {
const [products,setProducts]=useState([]);
const [pagination, setPagination] = useState({
  page: 1,
  perPage: 14,
  totalCount: 0,
});

useEffect(()=>{
  const fetchProducts = async()=>{
    try {
      const response = await ProductsGetAll(pagination.page, pagination.perPage);
      const productList = response.data.product;
      setPagination(productList)
      console.log(productList)
      setProducts(productList)
    } catch (error) {
      console.log(error)
    }
  }
  fetchProducts();
},[])


const calculateDiscountPercentage = (product) => {
  const { productPrice, salePrice } = product;

  if (productPrice > 0 && salePrice >= 0 && salePrice <= productPrice) {
    return ((productPrice - salePrice) / productPrice) * 100;
  } else {
    return 0;
  }
};


  return <ProductContext.Provider value={{products,setProducts,calculateDiscountPercentage}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider;
