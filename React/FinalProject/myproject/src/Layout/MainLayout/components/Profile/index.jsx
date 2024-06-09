import { Avatar, Drawer } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../../services/auth";


const Profile = ({ open, setOpen, user, setUser }) => {
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    setUser([]);
    navigate("/login");
    onClose();
  };
  return (
    <Drawer title="User Info" onClose={onClose} open={open}>
      <div className="flex flex-col justify-center items-center py-5">
        <Avatar
          size="large"
          style={{
            backgroundColor: "#87d068",
          }}
          icon={<UserOutlined />}
        />
        <div className="mt-5 gap-5 flex flex-col items-center justify-center">
          <p className="text-2xl font-semibold italic">
            {user?.name || ""} {user?.surname || ""}
          </p>
          <p className="text-2xl font-semibold italic">{user?.email || ""}</p>
        </div>
        <button
          onClick={()=>handleLogout()}
          className="button py-2 px-5 mt-10 bg-red-300 text-white hover:bg-red-600 duration-500 text-lg italic"
        >
          Log out
        </button>
      </div>
    </Drawer>
  );
};

export default Profile;
