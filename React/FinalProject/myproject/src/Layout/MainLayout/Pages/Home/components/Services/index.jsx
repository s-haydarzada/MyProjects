import React from "react";
import { FaUndoAlt } from "react-icons/fa";
import { MdLocalShipping, MdOutlineSupport, MdPayment } from "react-icons/md";

const Services = () => {
  const items = [
    {
      title: "Free Shipping",
      icon: <MdLocalShipping size={40} />,
      desc: "Free shipping on all US order or order above $200",
    },
    {
      title: "Support 24/7",
      icon: <MdOutlineSupport size={40} />,
      desc: "Contact us 24 hours a day, 7 days a week",
    },
    {
      title: "30 Days Return",
      icon: <FaUndoAlt size={40} />,
      desc: "Simply return it within 30 days for an exchange",
    },
    {
      title: "100% Payment Secure",
      icon: <MdPayment size={40} />,
      desc: "We ensure secure payment with PEV",
    },
  ];

  return (
    <div className="px-10 md:px-10 lg:px-24">
      <div>
        <ul className="flex flex-col items-start md:flex-row justify-between gap-10 md:py-12">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-start md:flex-row gap-5">
              {item.icon}
              <div>
                <h2 className="font-medium text-base">{item.title}</h2>
                <p className="text-sm mt-3">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
