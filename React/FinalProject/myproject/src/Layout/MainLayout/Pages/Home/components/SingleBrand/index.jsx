import React, { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const screenWidth=window.innerWidth;

const SingleBrand = () => {
  const element = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const brands = [
    {
      id: 0,
      img: "../../../../../../../src/assets/Images/slider1.webp",
    },
    {
      id: 1,
      img: "../../../../../../../src/assets/Images/slider2.webp",
    },
    {
      id: 2,
      img: "../../../../../../../src/assets/Images/slider3.webp",
    },
    {
      id: 3,
      img: "../../../../../../../src/assets/Images/slider4.webp",
    },
    {
      id: 4,
      img: "../../../../../../../src/assets/Images/slider5.webp",
    },
    {
      id: 5,
      img: "../../../../../../../src/assets/Images/slider6.webp",
    },
    {
      id: 6,
      img: "../../../../../../../src/assets/Images/slider2.webp",
    },
    {
      id: 7,
      img: "../../../../../../../src/assets/Images/slider4.webp",
    },
    {
      id: 8,
      img: "../../../../../../../src/assets/Images/slider1.webp",
    },
    {
      id: 9,
      img: "../../../../../../../src/assets/Images/slider3.webp",
    },
    {
      id: 10,
      img: "../../../../../../../src/assets/Images/slider2.webp",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderRight = () => {
    if (element.current) {
      element.current.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = () => {
    if (element.current) {
      element.current.scrollLeft -= screenWidth - 110;
    }
  };


  return (
    <section className="w-full h-[200px] flex items-center relative group overflow-auto mt-20">
      <div ref={element} className="container mx-auto max-w-screen h-full flex items-center transition-colors duration-300 overflow-x-auto scrollbar-hide">
        <div  className="flex justify-between items-center gap-[70px] py-5">
          {brands.map((item) => (
            <div key={item.id} className="w-[160px] h-[150px] duration-300">
              <img key={item.id} src={item.img} className="w-full h-full mr-4" alt={`Brand ${item.id}`} />
            </div>
          ))}
        </div>
        <button
          onClick={sliderLeft}
          className="hidden md:flex absolute left-20 top-[60px] w-[40px] h-[40px] bg-[#dddddd] opacity-0 duration-300 rounded-md hover:bg-[#87cf97] cursor-pointer group-hover:opacity-100 items-center justify-center"
        >
          <HiChevronLeft className="text-black text-sm" />
        </button>
        <button
          onClick={sliderRight}
          className="hidden md:flex absolute right-20 top-[60px] w-[40px] h-[40px] bg-[#dddddd] rounded-md duration-300 opacity-0 hover:bg-[#87cf97] cursor-pointer group-hover:opacity-100 items-center justify-center"
        >
          <HiChevronRight className="text-black text-sm" />
        </button>
      </div>
    </section>
  );
};

export default SingleBrand;
