import React, { useState } from 'react';
import { Typography } from "antd";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import AddProduct from '../AddProduct';

const ProductHeader = ({setRowData,rowData}) => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();

    const showLargeDrawer = () => {
        setSize("large");
        setOpen(true);
      };

  return (
    <div className="flex items-center justify-between">
        <Typography.Title level={3} className="hidden md:block">
          Products
        </Typography.Title>
        <div className="flex justify-end items-center gap-3">
          {/* <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-red-400 border border-transparent w-[150px] rounded-md h-12">
            <FaRegTrashCan size={18} />
            <span className="ml-2">Delete</span>
          </button> */}
          <button
            onClick={showLargeDrawer}
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-[150px] rounded-md h-12"
          >
            <FaPlus size={18} />
            <span className="ml-2">Add Product</span>
          </button>
          <AddProduct
            open={open}
            setOpen={setOpen}
            size={size}
            setSize={setSize}
            setRowData={setRowData}
            rowData={rowData}
          />
        </div>
      </div>
  );
}

export default ProductHeader;
