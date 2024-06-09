import { Breadcrumb } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { ProductContext } from "../../../../Contexts/ProductContext";
import CardItem from "../Home/components/CardItem";
import { Pagination } from "antd";
import {
  BrandsGet,
  ProductFilterAndSearching,
} from "../../../../services/products";
import { useFormik } from "formik";
import ListView from "./components/ListView";

const Shop = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [brand, setBrand] = useState([]);
  const [sortType, setSortType] = useState("title-ascending");
  const [viewMode, setViewMode] = useState("grid"); // Yeni state

  const [filterOptions, setFilterOptions] = useState({
    page: 1,
    perPage: 10,
    minPrice: "",
    maxPrice: "",
    stock: false,
    outStock:false,
    brand: "",
    totalCount: 0,
  });

  const { setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      page: 1,
      perPage: 10,
      minPrice: "",
      maxPrice: "",
      stock: false,
      outStock: false,
      totalCount: 0,
    },
    onSubmit: async (values) => {
      console.log(values);

      try {
        const filteredProducts = await ProductFilterAndSearching(
          values.page,
          values.perPage,
          values.minPrice,
          values.maxPrice,
          values.stock
        );
        setProducts(filteredProducts.data.product);
        setFilterOptions((prevOptions) => ({
          ...prevOptions,
          page: filteredProducts.page,
          totalCount: filteredProducts.totalCount,
        }));
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    ProductFilterAndSearching(
      filterOptions.page,
      filterOptions.perPage,
      filterOptions.minPrice,
      filterOptions.maxPrice,
      filterOptions.stock
    );
  }, [filterOptions]);

  useEffect(() => {
    const getBrand = async () => {
      try {
        const response = await BrandsGet();
        const brandList = response.data;
        setBrand(brandList);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    getBrand();
  }, []);

  const getPrice = (product) => {
    return product.salePrice ? product.salePrice : product.productPrice;
  };

  const sortProducts = (products, sortType) => {
    let sortedProducts = [...products];
    switch (sortType) {
      case "title-ascending":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-descending":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-ascending":
        sortedProducts.sort((a, b) => getPrice(a) - getPrice(b));
        break;
      case "price-descending":
        sortedProducts.sort((a, b) => getPrice(b) - getPrice(a));
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 flex flex-col overscroll-y-auto scrollbar-hide">
      <Breadcrumb
        className="py-4 px-12"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Products",
          },
        ]}
      />
      <div>
        <div className="px-12 py-20 h-auto">
          <div className="grid grid-cols-3 gap-10">
            <div>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="border p-4 mb-5">
                  <h3 className="mb-4 mx-3 text-left text-2xl italic">
                    Availability
                  </h3>
                  <ul className="w-40 text-sm font-medium">
                    <li className="w-full rounded-t-lg">
                      <div className="flex items-center ps-3">
                        <input
                          id="availability"
                          type="checkbox"
                          name="stock"
                          onChange={(e) => {
                            setFieldValue("stock", e.target.checked);
                          }}
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                        />
                        <label
                          htmlFor="react-checkbox"
                          className="w-full py-3 ms-2 text-sm font-medium"
                        >
                          Stock (12)
                        </label>
                      </div>
                    </li>
                    <li className="w-full rounded-t-lg">
                      <div className="flex items-center ps-3">
                        <input
                          id="outStock"
                          name="stock"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                          onChange={(e) => {
                            setFieldValue("outStock", e.target.checked);
                          }}
                        />

                        <label
                          htmlFor="vue-checkbox"
                          className="w-full py-3 ms-2 text-sm font-medium"
                        >
                          Out of Stock (1)
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="border p-2 mb-5">
                  <h3 className="mb-4 mx-3 text-left text-2xl italic">Price</h3>
                  <div className="sidebar-list-style">
                    <div className="checkbox-container categories-list sidebar-price-filter flex">
                      <div className="filter-range-from">
                        <span className="mr-1">$</span>
                        <input
                          name="minPrice"
                          type="number"
                          placeholder="0"
                          min="0"
                          max="1000000"
                          onChange={(e) => {
                            setFieldValue("minPrice", e.target.value);
                          }}
                        />
                        <label className="mx-2">From</label>
                      </div>
                      <div className="filter-price-range-to">
                        <span className="mr-1">$</span>
                        <input
                          name="maxPrice"
                          type="number"
                          placeholder="110.00"
                          min="0"
                          max="1000000"
                          onChange={(e) => {
                            setFieldValue("maxPrice", e.target.value);
                          }}
                        />
                        <label className="ml-1">To</label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-gray-700 text-white py-3 px-11 mt-4"
                    >
                      Filter
                    </button>
                  </div>
                </div>
                <div className="border p-4 mb-5">
                  <h3 className="mb-4 mx-3 text-left text-2xl italic">
                    Brands
                  </h3>
                  <ul className="w-72 text-sm font-medium">
                    {brand.map((brand) => (
                      <li key={brand._id} className="w-full rounded-t-lg">
                        <div className="flex items-center ps-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                            name="brandId"
                            value={brand.name}
                            onChange={(e) => {
                              setFieldValue("brandId", e.target.value);
                            }}
                          />

                          <label
                            htmlFor={`brand-checkbox-${brand.id}`}
                            className="w-full py-3 ms-2 text-sm text-[#505050]"
                          >
                            {brand.name} (27)
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </form>
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="p-6 bg-white border">
                <div className="flex justify-between items-center">
                  <div className="flex gap-3 text-[20px]">
                    <button onClick={() => setViewMode("grid")}>
                      <BsGrid3X3GapFill />
                    </button>
                    <button onClick={() => setViewMode("list")}>
                      <FaList />
                    </button>
                  </div>
                  <div className="product-short">
                    <label htmlFor="SortBy" className="mr-3">
                      Sort by
                    </label>
                    <select
                      name="SortBy"
                      id="SortBy"
                      className="outline-none border-neutral-300 focus:border-neutral-300"
                      onChange={(e) => setSortType(e.target.value)}
                    >
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                className={`border w-full h-full border-gray-300 mt-10 ${
                  viewMode === "grid" ? "flex flex-wrap" : "flex flex-col"
                }`}
              >
                {sortProducts(products, sortType).map((prod) => (
                  <div
                    key={prod._id}
                    className={`p-4 ${
                      viewMode === "grid"
                        ? "w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                        : "w-full"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <CardItem product={prod} />
                    ) : (
                      <ListView product={prod} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Pagination
                  current={filterOptions.page}
                  pageSize={filterOptions.perPage}
                  total={filterOptions.totalCount}
                  onChange={(page) => {
                    setFilterOptions((prevOptions) => ({
                      ...prevOptions,
                      page: page,
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
