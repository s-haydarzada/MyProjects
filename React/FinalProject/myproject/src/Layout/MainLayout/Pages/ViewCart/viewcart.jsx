import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../../Contexts/CardContext";
import { Breadcrumb, Empty } from "antd";
import { empty } from "../../../../assets/Images";
import ViewCartItem from "./components/ViewCartItem";
import { Col, Row } from "antd";
import { GetBasket } from "../../../../services/products";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../../Contexts/ProductContext";

const Viewcart = () => {
  const { basket, decreaseAmount, increaseAmount, removeFromCart,total } =
    useContext(CartContext);
    
  const item = {
    type: "separator",
    separator: ">",
  };


  return (
    <section className="w-full h-full mt-24 px-12 py-10 drop-shadow-lg">
       <Breadcrumb
        className="py-4 mb-10"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "ViewCart",
          },
        ]}
      />
      <div>
        <Row className="border py-4 flex justify-center items-center">
          <Col span={4} className="table pl-3">
            Image
          </Col>
          <Col span={5} className="">
            Product
          </Col>
          <Col span={4} className="">
            Price
          </Col>
          <Col span={4} className="">
            Quantity
          </Col>
          <Col span={4} className="">
            Total
          </Col>
          <Col span={3} className="">
            Remove
          </Col>
        </Row>
        {basket.map((item) => (
          <Row
            key={item.id}
            className="flex items-center justify-center border py-4 pt-2 border-t-0"
          >
            <Col span={3} className="table">
              <img
                src={item.product.images[0].url}
                alt=""
                className="w-24 h-24 object-contain"
              />
            </Col>
            <Col span={6} className="pl-6">
              {item.product.title}
            </Col>
            <Col span={4} className="">
              $ {item.product.salePrice?item.product.salePrice:item.product.productPrice}
            </Col>
            <Col span={4} className="">
              <div className="border px-2 py-1 flex flex-1 max-w-[100px] items-center h-full text-primary font-medium">
                <div
                  onClick={() => decreaseAmount(item.productId)}
                  className="flex-1 flex justify-center items-center cursor-pointer h-full"
                >
                  <IoMdRemove />
                </div>
                <div className="h-full flex justify-center items-center px-2">
                  {item.productCount}
                </div>
                <div
                  onClick={() => increaseAmount(item.productId)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                >
                  <IoMdAdd />
                </div>
              </div>
            </Col>
            <Col span={4} className="">
              <div>{`$ ${parseFloat(
                (item.product.salePrice?item.product.salePrice:item.product.productPrice) * item.productCount
              ).toFixed(2)}`}</div>
            </Col>
            <Col span={3} className="">
              <button
                onClick={() => removeFromCart(item.productId)}
                className="text-xl cursor-pointer"
              >
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
              </button>
            </Col>
          </Row>
        ))}
      </div>

      <Row justify="end">
        <div className="w-[400px] px-3 flex flex-col mt-10">
          <h3 className="font-medium text-black text-[22px]">
            Cart Totals
          </h3>
          <div className="my-5 border px-3 text-black font-bold text-lg">
            <div className="flex justify-between items-center py-4">
              <h5>Total</h5>
              <p>$ {parseFloat(total).toFixed(2)}</p>
            </div>
          </div>
          <Link to="/checkout">
          <button className="p-3 border bg-black hover:bg-[#8a8f6a] text-white duration-500 text-lg">
            Proceed To Checkout
          </button>
          </Link>
        </div>
      </Row>
    </section>
  );
};

export default Viewcart;
