import { Avatar, Badge, Space } from "antd";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

const DashboardHeader = ({ onMenuToggle }) => {
  return (
    <div className="py-1 px-3 flex justify-between items-center bg-white border-b-2 shadow-md h-[70px]">
      <div className="w-full px-3 flex justify-between items-center gap-3">
        <button onClick={onMenuToggle}>
          <FiMenu size={26} />
        </button>
        <div className="flex items-center">
           <Space size="large" align="center">
             <Badge count={20}>
            <IoMdNotifications className="text-2xl text-green-400" />
          </Badge>
          <Avatar
            className="flex justify-center items-center"
            size={40}
            icon={<IoPersonOutline />}
          />         
        </Space>
        </div>
       
      </div>
    </div>
  );
};

export default DashboardHeader;
