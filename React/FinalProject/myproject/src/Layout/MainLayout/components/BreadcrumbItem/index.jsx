import React from 'react'
import { Breadcrumb } from "antd";

const BreadcrumbItem = ({items}) => {
  return (
    <div className="w-full p-4">
    <Breadcrumb
      className="px-12 text-sm bg-[#f8f9fa] py-4"
      items={items}
    />
  </div>
  )
}

export default BreadcrumbItem
