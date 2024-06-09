import React from "react";
import { titlebg } from '../../../../../../assets/Images';


const BestsellerHeader = ({title,subTitle}) => {
  return (
    <div className="flex flex-col my-5 py-10 justify-center items-center">
      <h1 className="text-3xl capitalize">{title}</h1>
      <h4 className="pt-3 pb-7 text-gray-400 text-lg">{subTitle}</h4>
      <div className="">
        <img src={titlebg} alt="" className="font-bold" />
      </div>
    </div>
  );
};

export default BestsellerHeader;
