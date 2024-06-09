import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BreadcrumbItem from "../../components/BreadcrumbItem";
import LoginInput from "../Login/components/LoginInput";
import LoginBtn from "../Login/components/LoginBtn";
import Header from "../Login/components/Header";
import { useFormik } from 'formik';
import { RegisterCall } from "../../../../services/auth";
import { AuthContext } from "../../../../Contexts/AuthContext";

const Register = () => {

  const {setUser}=useContext(AuthContext)

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password:""
    },

    onSubmit: values => {
      RegisterCall(values).then(({data})=>{
        localStorage.setItem("token",data.token)
        setUser(data.user)
      }).catch((err)=>{
        console.log(err)
      })
    },
  });

  const dynamicItems = [
    {
      title: (
        <Link to={"/"} className="text-black">
          Home
        </Link>
      ),
    },
    {
      title: "Create Account",
      className: "text-gray-500",
    },
  ];


  return (
    <section className="w-full min-h-screen pt-28">
      <BreadcrumbItem items={dynamicItems} />
      <div className="w-full flex flex-col justify-between relative items-center mx-auto max-w-screen-lg">
        <div className="pt-10 mt-10 bg-slate-200 border w-[90%] md:w-[600px] border-gray-300 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col justify-center items-center mb-20">
          <Header
            title="Create Account"
            subtitle="Please Register using account detail bellow."
          />
          <form action="" className="mt-5 w-full" onSubmit={formik.handleSubmit}>
            <LoginInput
              id="name"
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              required
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <LoginInput
              id="surname"
              name="surname"
              label="Surname"
              type="text"
              placeholder="Surname"
              required
              value={formik.values.surname}
              onChange={formik.handleChange}
            />
            <LoginInput
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <LoginInput
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="********"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <LoginBtn title="Create" returnBtn="Return to Home" returnPath={"/"}/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
