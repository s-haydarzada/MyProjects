import React from "react";
import { Card, Space, Statistic } from "antd";

const DashboardCard = ({ title, value, icon,backgroundColor,iconColor }) => {
    const cardStyle = {
        backgroundColor: backgroundColor,
        color: iconColor,
        borderRadius:20,
        fontSize:22,
        padding:10,
      };
      
  return (
    <Card>
      <Space direction="horizontal">
        <div style={cardStyle} className="font-medium">{icon}</div>
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default DashboardCard;
