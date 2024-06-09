import React from "react";
import MenuItem from '../MenuItem/index';

const Menu = ({menu}) => {
    return (
      <div className="hidden md:flex items-center justify-between gap-10">
        {menu.map((item) => (
          <div key={item.id} className="flex items-center cursor-pointer gap-1">
            <MenuItem name={item.name} subMenuItems={item.subMenuItems} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Menu;
