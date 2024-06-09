import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Drawer, Form, Select, Upload } from "antd";
import { useFormik } from "formik";
import {
  BrandsGetAll,
  ProductsCall,
} from "../../../../../../services/products";
import MultipleFileConverter from "./../../../../../../utils/MultipleFileConverter";
import { BrandContext } from "../../../../../../Contexts/BrandsContext";
import { UploadOutlined } from "@ant-design/icons";

const AddProduct = ({ open, setOpen, size, setRowData,rowData }) => {
  const singleData = rowData.product;
  const { brands, setBrands } = useContext(BrandContext);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const getBrandNameById = (brandId) => {
    const brand = brands.find((brand) => brand._id === brandId);
    return brand ? brand.name : null;
  };

  useEffect(() => {
    const fetchBrands = async () => {
      const brandsData = await BrandsGetAll();
      const info = brandsData.data;
      setBrands(info);
    };

    fetchBrands();
  }, []);

  const { setFieldValue, handleSubmit, handleReset } = useFormik({
    initialValues: {
      title: "",
      description: "",
      salePrice: "",
      productPrice: "",
      brandId: "",
      stock: "",
      images: [],
    },
    onSubmit: async (values) => {
      try {
        const productPrice = parseFloat(values.productPrice);
        const salePrice = parseFloat(values.salePrice);

        if (productPrice < salePrice) {
          setShowAlert(true);
          return;
        } else {
          setShowAlert(false);
        }

        const response = await ProductsCall(values);
        const newProduct = response.data;
        const brandName = getBrandNameById(newProduct.brandId);
        const updatedRowData = {
          ...rowData,
          ...newProduct,
          brandName: brandName,
         
        };
        console.log(updatedRowData)
        setRowData(updatedRowData);
        onClose();
      } catch (err) {
        console.error(err);
      }
    },
  });

  const onClose = () => {
    setOpen(false);
    handleReset();
    setShowAlert(false);
  };

  return (
    <>
      <Drawer
        title="Add Product"
        placement="right"
        width="70%"
        size={size}
        onClose={onClose}
        open={open}
        className="text-red-300"
      >
        <div className="flex flex-col justify-between items-center">
          <Form action="" className="block w-full" onFinish={handleSubmit}>
            <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Product Title/Name
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <input
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    type="text"
                    name="title"
                    placeholder="Product Title/Name"
                    onChange={(e) => {
                      setFieldValue("title", e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Product Description
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <textarea
                    className="block focus:bg-white dark:text-gray-300 rounded-md focus:outline-none p-3 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 border text-sm w-full bg-gray-100 border-gray-200"
                    name="description"
                    placeholder="Product Description"
                    rows="4"
                    spellCheck="false"
                    onChange={(e) => {
                      setFieldValue("description", e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Product Images
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className="w-full text-center">
                    <div
                      className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                      role="presentation"
                      tabIndex="0"
                    >
                      {/* <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture"
                        maxCount={4}
                        multiple
                        tabIndex="-1"
                        name="images"
                        onChange={async (e) => {
                          let res = await MultipleFileConverter(e);
                          setFieldValue("images", res);
                        }}
                      >
                        <Button icon={<UploadOutlined />}>
                          Upload (Max: 4)
                        </Button>
                      </Upload> */}
                      <input
                        accept="image/*,.jpeg,.jpg,.png,.webp"
                        multiple
                        type="file"
                        tabIndex="-1"
                        className="hidden"
                        name="images"
                        onChange={async (e) => {
                          let res = await MultipleFileConverter(e);
                          setFieldValue("images", res);
                        }}
                      />
                      {/* 
                      <span className="mx-auto flex justify-center">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-3xl text-emerald-500"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="16 16 12 12 8 16"></polyline>
                          <line x1="12" y1="12" x2="12" y2="21"></line>
                          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                          <polyline points="16 16 12 12 8 16"></polyline>
                        </svg>
                      </span>
                      <p className="text-sm mt-2">Drag your images here</p>
                      <em className="text-xs text-gray-400">
                        (Only *.jpeg, *.webp and *.png images will be accepted)
                      </em> */}
                      <aside className="flex flex-row flex-wrap mt-4">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="mr-2 mb-2">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Product Image ${index + 1}`}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <span
                              className="cursor-pointer text-red-500 ml-1"
                              onClick={() => {
                                const newFiles = [...selectedFiles];
                                newFiles.splice(index, 1);
                                setSelectedFiles(newFiles);
                                setFieldValue("images", newFiles);
                              }}
                            >
                              Remove
                            </span>
                          </div>
                        ))}
                      </aside>
                    </div>
                    <div className="text-emerald-500"></div>
                    <aside className="flex flex-row flex-wrap mt-4"></aside>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Brands
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <Select
                    placeholder="Select a brand"
                    name="brandId"
                    onChange={(value) => {
                      setFieldValue("brandId", value);
                    }}
                  >
                    {brands.map((brand) => (
                      <Select.Option key={brand._id} value={brand._id}>
                        {brand.name}
                      </Select.Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Product Price
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className="flex flex-row">
                    <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                      $
                    </span>
                    <input
                      className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2 rounded-l-none"
                      type="number"
                      name="productPrice"
                      placeholder="OriginalPrice"
                      onChange={(e) => {
                        setFieldValue("productPrice", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Sale Price
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className="flex flex-row">
                    <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                      $
                    </span>
                    <input
                      className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2 rounded-l-none"
                      type="number"
                      name="salePrice"
                      placeholder="Sale price"
                      onChange={(e) => {
                        setFieldValue("salePrice", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Product Quantity
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <div className="flex flex-row">
                    <input
                      className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                      type="number"
                      name="stock"
                      placeholder="Product Quantity"
                      onChange={(e) => {
                        setFieldValue("stock", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              {showAlert && (
                <Alert
                  message="Warning"
                  description="Product price cannot be less than sale price."
                  type="warning"
                  showIcon
                  closable
                  onClose={() => setShowAlert(false)}
                />
              )}
            </div>
            <div className="w-full flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <button
                className="mb-4 align-bottom leading-5 transition-colors duration-150 font-medium py-2 text-sm focus:outline-none rounded-lg border border-gray-200 px-4 mr-3 flex items-center justify-center cursor-pointer h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                type="button"
              >
                <span>Cancel</span>
              </button>
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                type="submit"
              >
                <span>Add Product</span>
              </button>
            </div>
          </Form>
        </div>
      </Drawer>
    </>
  );
};
export default AddProduct;
