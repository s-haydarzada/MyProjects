import React, { useEffect, useState } from "react";
import { Space, Spin, Table, Typography } from "antd";
import { FaRegTrashCan, FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import BrandDrawer from "./components/BrandDrawer";
import { BrandsGetAll, DeleteBrands } from "../../../../services/products";
import UpdateDrawer from "./components/UpdateDrawer";

const Brands = () => {
  const [open, setOpen] = useState(false);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [brands, setBrands] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  //UPDATE OPERATION START
  const [editingBrandId, setEditingBrandId] = useState(null);
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [initialValue, setInitialValues] = useState({
    name: "",
    image: "",
  });

  const handleEdit = (record) => {
    setEditingBrandId(record._id);
    setInitialValues({
      name: record.name,
      image: record.image,
    });
    setEditFormVisible(true);
  };


  //UPDATE OPERATION END

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text) =>
        text && text.url ? (
          <img
            src={text.url}
            alt="avatar"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
        ) : null,
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
      render: (text) => {
        const formattedDate = new Date(text).toLocaleString();
        return <span>{formattedDate}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => handleEdit(_)}
            className="text-xl hover:text-green-600"
          >
            <FiEdit />
          </button>
          <UpdateDrawer
            editFormVisible={editFormVisible}
            setEditFormVisible={setEditFormVisible}
            updateBrandsList={updateBrandsList}
            editingBrandId={editingBrandId}
            initialValue={initialValue}
            setInitialValues={setInitialValues}
            setBrands={setBrands}
          />
          <button
            onClick={() => deleteBrand(_._id)}
            className="text-xl hover:text-red-600"
          >
            <IoTrashOutline />
          </button>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      name: record.name,
    }),
  };

  //BradsGetAll with API
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await BrandsGetAll();
        const brandData = response.data;
        const brands = brandData.map((brand) => ({
          ...brand,
          name: brand.brandName,
        }));
        setBrands(brands);
      } catch (error) {
        console.error("Error fetching brands", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  //Delete Brands
  const deleteBrand = async (id) => {
    try {
      await DeleteBrands(id);
      const deletedBrands = brands.filter((brand) => brand._id !== id);
      setBrands(deletedBrands);
      setSelectedRowKeys((prevDeletedRowKeys) => [...prevDeletedRowKeys, id]);
    } catch (error) {
      console.error("Error deleting brand", error);
    }
  };

  const updateBrandsList = (newBrand) => {
    setBrands((prevBrands) => [...prevBrands, newBrand]);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="p-4 h-screen overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <Typography.Title level={3} className="hidden md:block">
          Brands
        </Typography.Title>
        <div className="flex justify-end items-center gap-3">
          {/* <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-red-400 border border-transparent w-[150px] rounded-md h-12">
            <FaRegTrashCan size={18} />
            <span className="ml-2">Delete</span>
          </button> */}
          <button
            onClick={showDrawer}
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-[150px] rounded-md h-12"
          >
            <FaPlus size={18} />
            <span className="ml-2">Add Brand</span>
          </button>
          <BrandDrawer
            setOpen={setOpen}
            open={open}
            updateBrandsList={updateBrandsList}
          />
        </div>
      </div>
      <div className="mt-10 mx-1">
        {loading ? (
          <Spin className="flex justify-center items-center mt-20" size="middle"  />
        ) : (
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={brands.map((brand, index) => ({
              ...brand,
              key: index.toString(),
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default Brands;
