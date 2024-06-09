import { Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { GetOrders } from "../../../../../../services/products";
import { useRef } from "react";

const MyOrdersPage = ({order,setOrder}) => {
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 20,
    totalCount: 0,
  });

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customer",
      key: "customer",
      render: (text) => <span>{text.name}</span>,
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Create Date",
      dataIndex: "createdAt",
      render: (text) => {
        const formattedDate = new Date(text).toLocaleString();
        return <span>{formattedDate}</span>;
      },
    },
    // {
    //   title: "Update",
    //   dataIndex: "update",
    //   render: (text) => (
    //     <span className="text-lg text-gray-500">
    //       <MdEdit size={22} className="hover:text-green-400 cursor-pointer" />
    //     </span>
    //   ),
    // },
  ];

  useEffect(() => {
    const getOrderData = async () => {
      try {
        const res = await GetOrders(pagination.page, pagination.perPage);
        const orderItem = res.data.data;
        setPagination({
          page: orderItem.page,
          perPage: orderItem.perPage,
          totalCount: orderItem.totalCount,
        });
        setOrder(orderItem);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getOrderData();
  }, []);

  console.log(order)


  return (
    <div className="mt-5">
      {loading ? (
        <Spin
          className="flex justify-center items-center mt-20"
          size="middle"
        />
      ) : (
        <Table
          columns={columns}
          pagination={{
            page: pagination.page,
            perPage: pagination.perPage,
            totalCount: pagination.totalCount,
          }}
          dataSource={order.map((item, index) => ({
            ...item,
            key: index.toString(),
          }))}
        />
      )}
    </div>
  );
};

export default MyOrdersPage;
