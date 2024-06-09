import React from "react";
import { Skeleton } from "antd";

const CardItemSkeleton = () => {
  return (
    <div className="hover:shadow-2xl bg-gray-50 h-[400px] mt-10 mb-10 relative  transition z-0">
      <div className="mb-4 h-[280px] bg-gray-50 flex flex-col justify-center items-center relative w-full">
        <div className="h-full w-full flex justify-center items-center relative p-10">
          <Skeleton.Image active className="w-full h-full object-cover"/>
        </div>
        <div className="absolute bottom-1 left-0 w-full flex justify-center items-center duration-500">
          <Skeleton.Button active size="small" shape="round" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="absolute bottom-2 left-0 p-2 px-5 flex justify-between w-full items-center gap-y-2 duration-500">
        <Skeleton.Button active size="small" shape="round" />
        <Skeleton.Button active size="small" shape="round" />
      </div>
    </div>
  );
};

export default CardItemSkeleton;
