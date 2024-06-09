import React from "react";

const Header = ({title,subtitle}) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">{title}</h1>
      <h5 className="mb-4">{subtitle}</h5>
    </div>
  );
};

export default Header;
