import React from "react";
import { Space, Typography } from "antd";
import DashboardCard from "./components/DashboardCard";
import { FiRefreshCw, FiShoppingCart } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

const DashboardPage = () => {
  const dashboardCards = [
    {
      key: 1,
      title: "Total Order",
      value: 669,
      icon: <FiShoppingCart />,
      backgroundColor: "#ffb84d",
      iconColor: "#ff5c33",
    },
    {
      key: 2,
      title: "Orders Pending",
      value: 229,
      icon: <FiRefreshCw />,
      backgroundColor: "#b3ecff",
      iconColor: "#4d79ff",
    },
    {
      key: 3,
      title: "Orders Processing",
      value: 78,
      icon: <TbTruckDelivery />,
      backgroundColor: "#AAF0D1",
      iconColor: "#339933",
    },
    {
      key: 4,
      title: "Orders Delivered",
      value: 336,
      icon: <FaCheck />,
      backgroundColor: "#ccffd9",
      iconColor: "#4dff4d",
    },
  ];
  return (
    <div className="p-4">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space size={20} direction="horizontal">
        {dashboardCards.map((card) => {
          return (
            <DashboardCard
              key={card.key}
              title={card.title}
              value={card.value}
              icon={card.icon}
              backgroundColor={card.backgroundColor}
              iconColor={card.iconColor}
            />
          );
        })}
      </Space>
    </div>
  );
};

export default DashboardPage;



