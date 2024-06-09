import React, { useEffect, useState } from "react";
import ProductHeader from "./components/ProductHeader";
import FormInputs from "./components/FilteredSections";
import MyTable from "./components/MyTable";

const Products = () => {
  const [rowData,setRowData]=useState([]);
  const [query, setQuery] = useState("");
  const [filter,setFilter]=useState([])
  
    return (
    <div className="p-4 h-screen overflow-y-auto scrollbar-hide">
     <ProductHeader setRowData={setRowData} rowData={rowData}/>
      {/* <FormInputs rowData ={rowData} setRowData={setRowData} query={query} setQuery={setQuery} filter={filter} setFilter={setFilter}/> */}
      <MyTable rowData={rowData} setRowData={setRowData} query={query} setQuery={setQuery}/>
    </div>
  );
};

export default Products;
