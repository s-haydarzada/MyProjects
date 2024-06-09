import { Space, Spin, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { AdminsGetAll, DeleteAdmin } from "../../../../services/auth";
import AdminsDrawer from './Drawer/index';

const Customer = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [show, setShow] = useState(false);
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(true);

  const ShowAdminsModal = () => {
    setShow(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Surname",
      dataIndex: "surname",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text) => <span>{text}</span>,
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
        <button
          onClick={() => deleteAdminAccount(record._id)}
          className="text-xl hover:text-red-600"
        >
          <IoTrashOutline />
        </button>
      ),
    },
  ];

  const updateAdminList = (newAdmin) => {
    setAdmin((prev) => [...prev, newAdmin]);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await AdminsGetAll();
        const adminData = response.data;
        updateAdminList(adminData);
        setAdmin(adminData);
      } catch (error) {
        console.error("Error fetching brands", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [updateAdminList]);

  //Delete Admin Account
  const deleteAdminAccount = async (id) => {
    try {
      await DeleteAdmin(id);
      const deletedAdmin = admin.filter((item) => item._id !== id);
      updateAdminList(deletedAdmin);
      setAdmin(deletedAdmin);
      // setSelectedRowKeys((prevDeletedRowKeys) => [...prevDeletedRowKeys, id]);
    } catch (error) {
      console.error("Error deleting admin", error);
    }
  };

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

  return (
    <div className="p-4 h-screen overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between">
        <Typography.Title level={3} className="hidden md:block">
          Admins
        </Typography.Title>
        <div className="flex justify-end items-center gap-3">
          {/* <button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-red-400 border border-transparent w-[150px] rounded-md h-12">
            <FaRegTrashCan size={18} />
            <span className="ml-2">Delete</span>
          </button> */}
          <button
            onClick={ShowAdminsModal}
            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-[150px] rounded-md h-12"
          >
            <FaPlus size={18} />
            <span className="ml-2">Add Brand</span>
          </button>
          <AdminsDrawer
            show={show}
            setShow={setShow}
            updateAdminList={updateAdminList}
          />
        </div>
      </div>
      <div className="mt-10 mx-1">
        {loading ? (
          <Spin className="flex justify-center items-center mt-20" size="middle" />
        ) : (
          <Table
            key="_id"
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={admin.map((item, index) => ({
              ...item,
              key: index.toString(),
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default Customer;
