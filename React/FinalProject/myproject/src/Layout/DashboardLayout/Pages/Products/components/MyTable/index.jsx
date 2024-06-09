import {
  Checkbox,
  Divider,
  Pagination,
  Space,
  Switch,
  Table,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import EditDrawer from "./../EditDrawer/index";
import {
  DeleteProduct,
  PaginationAll,
  ProductSearching,
} from "../../../../../../services/products";
import { FaSearchPlus } from "react-icons/fa";

const MyTable = ({ rowData, setRowData, query }) => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
    totalCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [tabledata, setTableData] = useState([]);
  const [switchStates, setSwitchStates] = useState([]);
  //UPDATE PRODUCTS START
  const [editFormVisible, setEditFormVisible] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const [initialValue, setInitialValue] = useState({
    title: "",
    description: "",
    productPrice: "",
    salePrice: "",
    brandId: "",
    stock: "",
    images: [],
  });

  const editProduct = (record) => {
    setEditingProductId(record._id);
    setEditFormVisible(true);
    const imageUrls = record.images.map((image) => image.url);

    setInitialValue({
      title: record.title,
      description: record.description,
      productPrice: record.productPrice,
      salePrice: record.salePrice,
      brandId: record.brandId,
      stock: record.stock,
      images: imageUrls,
    });
  };

  //UPDATE PRODUCTS END

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Brands",
      dataIndex: "brandId",
    },
    {
      title: "Price",
      dataIndex: "productPrice",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Sale Price",
      dataIndex: "salePrice",
      render: (text) => <span>${text}</span>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => (
        <StatusColumn text={record.stock > 0 ? "Selling" : "Sold out"} />
      ),
    },
    {
      title: "View",
      dataIndex: "_id",
      render: (text) => (
        <Link to={`/product/${text}`}>
          <span className="text-lg text-gray-500">
            <FaSearchPlus />
          </span>
        </Link>
      ),
    },
    {
      title: "Published",
      dataIndex: "isPublish",
      render: (_, record) => (
        <Switch
          size="small"
          checked={record.isPublish}
          onChange={(checked) => onChange(record.key, checked)}
          style={{ backgroundColor: record.switchColor }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => editProduct(record)}
            className="text-xl hover:text-green-600"
          >
            <FiEdit />
          </button>
          <EditDrawer
            setEditFormVisible={setEditFormVisible}
            editFormVisible={editFormVisible}
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            editingProductId={editingProductId}
            setEditingProductId={setEditingProductId}
            updateList={updateList}
            // setData={setData}
          />
          <button
            onClick={() => deleteProduct(record._id)}
            className="text-xl hover:text-red-600"
          >
            <IoTrashOutline />
          </button>
        </Space>
      ),
    },
  ];

  const updateList = (newBrand) => {
    setTableData((prevBrands) => [...prevBrands, newBrand]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await PaginationAll(pagination.page, pagination.perPage);
      const result = res.data;
      setTableData(result.product);
      setLoading(false);

      setSwitchStates(
        result.product.map((item) => ({
          key: item._id,
          isPublish: item.isPublish,
          switchColor: item.isPublish ? "green" : "red",
        }))
      );

      setPagination((prevPagination) => ({
        ...prevPagination,
        totalCount: result.totalCount,
      }));
    };

    fetchData();
  }, [pagination.page, pagination.perPage, updateList, rowData]);

  useEffect(() => {
    const searching = async () => {
      const search = await ProductSearching(query);
      const searchData = search.data.product;
      console.log(searchData);
      setRowData(searchData);
      setTableData(searchData);
    };
    searching();
  }, [query]);

  const handlePageChange = (page, perPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      page: page,
      perPage: perPage,
    }));
  };

  const StatusColumn = ({ text }) => {
    let color = "";
    let borderColor = "";
    let backgroundColor = "";

    switch (text) {
      case "Selling":
        color = "#2eb82e";
        borderColor = "#70db70";
        backgroundColor = "#c2f0c2";
        break;
      case "Sold out":
        color = "#ff704d";
        borderColor = "#ff704d";
        backgroundColor = "#ffd6cc";
        break;
      default:
        break;
    }

    const style = {
      color: color,
      border: `1px solid ${borderColor}`,
      borderRadius: "14px",
      backgroundColor: backgroundColor,
      display: "inline-block",
      padding: "0 6px",
      textAlign: "center",
      fontSize: "12px",
    };

    return <span style={style}>{text}</span>;
  };

  const onChange = (key, checked) => {
    console.log("onChange called with key:", key);
    setSwitchStates((prevStates) =>
      prevStates.map((state) =>
        state.key === key
          ? {
              ...state,
              isPublish: checked,
              switchColor: checked ? "green" : "red",
            }
          : state
      )
    );
  };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  //Delete Product

  const deleteProduct = async (id) => {
    try {
      await DeleteProduct(id);
      const deletedData = tabledata.filter((item) => item._id !== id);
      setRowData(deletedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide mb-24">
      <Divider />
      {loading ? (
        <Spin
          className="flex justify-center items-center mt-20"
          size="middle"
        />
      ) : (
        <Table
          rowKey="_id"
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          pagination={false}
          dataSource={tabledata.map((item) => ({
            ...item,
            ...switchStates.find((state) => state.key === item._id),
          }))}
        />
      )}

      <Pagination
        className="mt-10 flex justify-end"
        defaultCurrent={pagination.page}
        defaultPageSize={pagination.perPage}
        total={pagination.totalCount}
        onChange={handlePageChange}
        showSizeChanger={false}
        showQuickJumper={true}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
      />
    </div>
  );
};

export default MyTable;
