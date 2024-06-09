import React, { useRef, useState } from "react";
import moment from "moment";


const OrderHeader = ({ order, setOrder }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputVal = inputRef.current.value;
    setQuery(inputVal);

    console.log(query)
  
    switch (inputVal) {
      case "5":
        setOrder(order.filter(item => moment(item.createdAt).isAfter(moment().subtract(5, 'days'))));
        break;
      case "7":
        setOrder(order.filter(item => moment(item.createdAt).isAfter(moment().subtract(7, 'days'))));
        break;
      case "15":
        setOrder(order.filter(item => moment(item.createdAt).isAfter(moment().subtract(15, 'days'))));
        break;
      case "30":
        setOrder(order.filter(item => moment(item.createdAt).isAfter(moment().subtract(30, 'days'))));
        break;
      default:
        setOrder(order);
        break;
    }
  };
  
  

  const filteredOrders = order.filter((item) => {
    return item.customer.name.toLowerCase().includes(query.toLowerCase());
  });


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 lg:gap-4 xl:gap-6 md:gap-2 md:grid-cols-3 py-2">
          <div>
            <input
            ref={inputRef}
              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
              type="search"
              name="search"
              placeholder="Search by Customer Name"
            />
          </div>
          <div>
            <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
              <option value="Status" hidden>
                Status
              </option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Cancel">Cancel</option>
            </select>
          </div>
          <div>
            <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5" onChange={handleSubmit}>
              <option value="Order limits" hidden>
                Order limits
              </option>
              <option value={5}>Last 5 days orders</option>
              <option value={7}>Last 7 days orders</option>
              <option value={15}>Last 15 days orders</option>
              <option value={30}>Last 30 days orders</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2">
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-400">
              Start Date
            </label>
            <input
              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
              type="date"
              name="startDate"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-800 dark:text-gray-400">
              End Date
            </label>
            <input
              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
              type="date"
              name="startDate"
            />
          </div>
          <div className="mt-2 md:mt-0 flex items-center xl:gap-x-4 gap-x-1 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
            <div className="w-full mx-1">
              <label
                className="block text-sm text-gray-800 dark:text-gray-400"
                style={{ visibility: "hidden" }}
              >
                Filter
              </label>
              <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                type="submit"
              >
                Filter
              </button>
            </div>
            <div className="w-full">
              <label
                className="block text-sm text-gray-800 dark:text-gray-400"
                style={{ visibility: "hidden" }}
              >
                Reset
              </label>
              <button
                className="align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none bg-gray-200 w-full mr-3 cursor-pointer h-12 md:py-1 dark:bg-gray-700"
                type="reset"
              >
                <span className="text-black dark:text-gray-200">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderHeader;
