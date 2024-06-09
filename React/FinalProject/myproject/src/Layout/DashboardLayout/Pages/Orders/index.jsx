import { Table } from "antd";
import React, { useState } from "react";
import MyOrdersPage from "./components/MyOrderPage";
import OrderHeader from "./components/OrderHeader";

const Orders = () => {
  const [order, setOrder] = useState([]);

  return (
    <section>
      {/* <OrderHeader order={order} setOrder={setOrder}/> */}
      <MyOrdersPage order={order} setOrder={setOrder}/>
    </section>
  );
};

export default Orders;
