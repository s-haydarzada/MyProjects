import React, { useRef } from "react";
import { sliderbg1, sliderbg2 } from "../../../../../../assets/Images";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SliderContent from "../SliderContent";
import { Watermark } from "antd";


const screenWidth = window.innerWidth;

const Hero = () => {
  const element = useRef();
  const navigate = useNavigate();

  const sliderRight = () => {
    element.current.scrollLeft += screenWidth;
  };

  const sliderLeft = () => {
    element.current.scrollLeft -= screenWidth;
  };

  const navigateShopPage = () => {
    navigate("/shop");
  };

  return (
    <Watermark
      content={["My Project"]}
      gap={[50,10]}
      offset={[50,100]}
    >
      <div className="w-full overflow-auto relative group mt-10">
        <HiChevronLeft
          className="hidden md:block py-3 hover:bg-green-100 bg-black text-white text-[50px] absolute left-0 top-20 mx-8 mt-[200px] cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
          onClick={sliderLeft}
        />
        <HiChevronRight
          className="hidden md:block text-[50px] py-3 bg-black text-white hover:bg-green-100 absolute right-0 mx-8 mt-[200px] top-20 cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
          onClick={sliderRight}
        />

        <div
          ref={element}
          className="flex overflow-x-auto w-full scrollbar-hide scroll-smooth mt-12 cont"
        >
          <div
            key="sliderbg1"
            className="min-w-full h-[400px] md:h-[600px] rounded-sm border-gray-400 transition-all duration-100 ease-in relative z-0"
          >
            <img
              src={sliderbg1}
              className="min-w-full h-full md:h-[600px] object-cover rounded-sm transition-all duration-100 ease-in "
              alt=""
            />
            <SliderContent
              key="slidercontent1"
              title="Classic Leather Accessories Amazing For Men's"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat"
              buttonText="Shop Now"
              onButtonClick={navigateShopPage}
            />
          </div>
          <div
            key="sliderbg2"
            className="min-w-full h-[400px] md:h-[600px] rounded-sm border-gray-400 transition-all duration-100 ease-in relative"
          >
            <img
              src={sliderbg2}
              className="min-w-full h-full md:h-[600px] object-cover rounded-sm transition-all duration-100 ease-in"
              alt=""
            />
            <SliderContent
              key="slidercontent2"
              title="Classic Leather Accessories Amazing For Men's"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat"
              buttonText="Shop Now"
              textColor="black"
              buttonBgColor="white"
              onButtonClick={navigateShopPage}
            />
          </div>
        </div>
      </div>
    </Watermark>
  );
};

export default Hero;
