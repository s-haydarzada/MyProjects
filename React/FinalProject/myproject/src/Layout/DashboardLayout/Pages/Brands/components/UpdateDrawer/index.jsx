import React, { useEffect, useState } from "react";
import { Button, Drawer, Form, Input } from "antd";
import FileConverter from "../../../../../../utils/FileConverter";
import { useFormik } from "formik";
import {
  BrandsGetAll,
  BrandsUpdate,
} from "../../../../../../services/products";

const UpdateDrawer = ({
  editingBrandId,
  editFormVisible,
  setEditFormVisible,
  updateBrandsList,
  initialValue,
  setInitialValues,
  setBrands,
}) => {
  const onClose = () => {
    setEditFormVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      name: initialValue.name,
      image: initialValue.image.url,
    },
    onSubmit: async (values) => {
      try {
        const response = await BrandsUpdate(editingBrandId, values);
        const updateBrand = response.data;
        updateBrandsList(updateBrand);
        setEditFormVisible(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    },
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await BrandsGetAll();
        const brandData = response.data;
        setBrands(brandData);
      } catch (error) {
        console.error("Error fetching brands", error);
      }
    };

    getData();
  }, [updateBrandsList]);

  return (
    <Drawer title="Update your Brands" onClose={onClose} open={editFormVisible}>
      <form
        action=""
        className="h-full border-b-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-5">
          <label>Name</label>
          <Input
            placeholder="Enter your brand name"
            className="mt-2"
            value={initialValue.name}
            onChange={(e) => {
              setInitialValues({
                ...initialValue,
                name: e.target.value,
              });
              formik.setFieldValue("name", e.target.value);
            }}
          />
        </div>
        <div>
          <label>Image</label>
          <Input
            type="file"
            placeholder="Enter your brand name"
            name="image"
            className="mt-2 border"
            onChange={async (e) => {
              let res = await FileConverter(e);
              formik.setFieldValue("image", res);
            }}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="py-2 px-5 mt-10 rounded-md flex bg-green-500 text-white"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </Drawer>
  );
};

export default UpdateDrawer;
