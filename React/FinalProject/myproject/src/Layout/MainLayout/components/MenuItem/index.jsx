import React,{useState} from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline,IoChevronUpOutline } from "react-icons/io5";

const MenuItem = ({ name, subMenuItems }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return (
      <div className="relative group transition-all duration-700" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex items-center gap-1 cursor-pointer  dark:group-hover:bg-gray-700 p-2 text-sm font-semibold">
          <h2>{name}</h2>
          {isHovered ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
        {subMenuItems && (
          <div className="hidden group-hover:block absolute left-0 top-9 mt-0 bg-white z-10 dark:bg-gray-800 shadow-xl w-[200px] rounded-md duration-500 animate-fadeIn">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
              {subMenuItems.map((item) => (
                <li key={item.id}>
                   <Link
                  to={item.name.toLowerCase() === "home" ? "/" : `/${item.name.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {item.name}
                </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  

export default MenuItem;
