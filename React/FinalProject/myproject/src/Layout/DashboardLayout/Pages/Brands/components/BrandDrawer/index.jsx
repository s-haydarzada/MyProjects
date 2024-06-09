import React, { useState } from "react";
import { Button, Drawer, Input } from "antd";
import { useFormik } from "formik";
import { BrandsCall } from "../../../../../../services/products";
import FileConverter from "../../../../../../utils/FileConverter";

const BrandDrawer = ({
  open,
  setOpen,
  updateBrandsList,
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const { handleSubmit, setFieldValue, handleReset } = useFormik({
    initialValues: {
      image: "",
      name: "",
    },
    
    onSubmit: async (values) => {
      try {
        const response = await BrandsCall(values);
        const newBrand = response.data;
        updateBrandsList(newBrand);
        onClose();
      } catch (err) {
        console.error(err);
      }
    },
  });

  return (
    <>
      <Drawer title="Create your Brands" onClose={onClose} open={open}>
        <form action="" className="h-full border-b-2" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label>Name</label>
            <Input
              placeholder="Enter your brand name"
              className="mt-2"
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Image</label>
            <Input
              type="file"
              placeholder="Enter your brand name"
              className="mt-2 border"
              onChange={async (e) => {
                let res = await FileConverter(e);
                setFieldValue("image", res);
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="py-2 px-5 mt-10 rounded-md flex bg-green-500 text-white"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
};

export default BrandDrawer;
