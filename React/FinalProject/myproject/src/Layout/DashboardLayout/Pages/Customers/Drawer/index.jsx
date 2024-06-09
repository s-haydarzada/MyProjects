import { Drawer } from "antd";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Formik, useFormik } from "formik";
import { AdminsCall } from "../../../../../services/auth";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const AdminsDrawer = ({ show, setShow, updateAdminList }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onClose = () => {
    setShow(false);
    handleReset();
  };

  const { handleSubmit, setFieldValue, handleReset } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const response = await AdminsCall(values);
        const newAdmin = response.data;
        updateAdminList(newAdmin);
        onClose();
      } catch (err) {
        console.error(err);
      }
    },
  });


  return (
    <Drawer title="Create Admins" onClose={onClose} open={show}>
       <form action="" className="h-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label>Name</label>
            <Input
              placeholder="Enter your brand name"
              className="mt-2"
              required
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label>Surname</label>
            <Input
              placeholder="Enter your surname"
              required
              className="mt-2"
              onChange={(e) => {
                setFieldValue("surname", e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label>Email</label>
            <Input
              placeholder="Enter your Email"
              type="email"
              required
              className="mt-2"
              onChange={(e) => {
                setFieldValue("email", e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label>Password</label>
            <Input.Password
              placeholder="Enter your password"
              required
              type="password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              className="mt-2"
              onChange={(e) => {
                setFieldValue("password", e.target.value);
              }}
            />
          </div>
        
          <div className="flex justify-center items-center">
            <button
              className="py-2 px-5 mt-10 rounded-md flex bg-green-500 text-white"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
    </Drawer>
  );
};

export default AdminsDrawer;
