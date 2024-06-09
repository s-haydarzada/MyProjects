import React, { createContext, useEffect, useState } from "react";
import { BrandsGetAll } from "../services/products";

export const BrandContext = createContext();

const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await BrandsGetAll();
        const brandList = response.data;
        setBrands(brandList);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    getBrands();
  }, []);

  return (
    <BrandContext.Provider value={{ brands, setBrands }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;
