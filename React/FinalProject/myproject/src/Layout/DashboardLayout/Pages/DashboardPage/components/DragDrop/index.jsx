import React, { useState, useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { Space, Switch, Table } from "antd";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { LiaSearchPlusSolid } from "react-icons/lia";
import MyTable from "../MyTable";

const type = "DraggableBodyRow";

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = useRef();

  const [{ isOver, dropClassName }, drop] = useDrop(
    () => ({
      accept: type,
      collect: (monitor) => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? "drop-over-downward" : "drop-over-upward",
        };
      },
      drop: (item) => {
        moveRow(item.index, index);
      },
    }),
    [index]
  );
  const [, drag] = useDrag(
    () => ({
      type,
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );
  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    />
  );
};

const StatusColumn = ({ text }) => {
  let color = "";
  let borderColor = "";
  let backgroundColor = "";

  switch (text.toLowerCase()) {
    case "selling":
      color = "#2eb82e";
      borderColor = "#70db70";
      backgroundColor = "#c2f0c2";
      break;
    case "sold out":
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

const DragDrop = ({rowData}) => {
  console.log(rowData)
  
  // const [data, setData] = useState([
  //   {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       brands: "Nike",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Selling",
  //       published: <Switch />,
  //       address: "New York No. 1 Lake Park",
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       brands: "Adidas",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Sold out",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       age: 32,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Puma",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Selling",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "4",
  //       name: "Disabled User",
  //       age: 99,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Nike",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Sold out",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "5",
  //       name: "price",
  //       age: 99,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Puma",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Selling",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "6",
  //       name: "sale",
  //       age: 99,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Adidas",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Sold out",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "7",
  //       name: "stock",
  //       age: 99,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Nike",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Selling",
  //       published: <Switch />,
  //     },
  //     {
  //       key: "8",
  //       name: "status",
  //       age: 99,
  //       address: "Sydney No. 1 Lake Park",
  //       brands: "Puma",
  //       stock: 3,
  //       price: 340,
  //       sale: 100,
  //       status: "Sold out",
  //       published: <Switch />,
  //     },
  // ]);
  const [selectionType, setSelectionType] = useState("checkbox");

  const components = {
    body: {
      row: DraggableBodyRow,
    },
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = rowData[dragIndex];
      setData(
        update(rowData, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [rowData]
  );

  const [switchStates, setSwitchStates] = useState(
    rowData.map((item) => ({
      key: item.key,
      isChecked: true,
      switchColor: "green",
    }))
  );

  const onChange = (key, checked) => {
    setSwitchStates((prevStates) =>
      prevStates.map((state) =>
        state.key === key
          ? {
              ...state,
              isChecked: checked,
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

  const columns = [
    {
      title: "Product Name",
      dataIndex: "title",
      render: (text) => <Link to={`/product/${text}`}>{text}</Link>,
    },
    {
      title: "Brands",
      dataIndex: "brands",
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
      render: (text) => <StatusColumn text={text} />,
    },
    {
      title: "View",
      dataIndex: "view",
      render: () => (
        <Link>
          <span className="text-lg text-gray-500">
            <LiaSearchPlusSolid />
          </span>
        </Link>
      ),
    },
    {
      title: "Published",
      dataIndex: "published",
      render: (_, record) => (
        <Switch
          size="small"
          checked={record.isChecked}
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
          <button className="text-xl hover:text-green-600">
            <FiEdit />
          </button>
          <button className="text-xl hover:text-red-600">
            <IoTrashOutline />
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container mt-5 overflow-x-auto mb-10">
    <DndProvider backend={HTML5Backend}>
      <MyTable
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={rowData.map((item) => ({
          ...item,
          ...switchStates.find((state) => state.key === item.key),
        }))}
        components={components}
        onRow={(record, index) => ({
          index,
          moveRow,
        })}
      />
    </DndProvider>
  </div>
  );
};

export default DragDrop;
