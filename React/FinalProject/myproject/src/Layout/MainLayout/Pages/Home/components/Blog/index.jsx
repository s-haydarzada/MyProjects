import React from "react";
import BestsellerHeader from "../BestsellerHeader";
import { Card } from "flowbite-react";
import { crop_center1 } from "../../../../../../assets/Images";
import { MdCalendarMonth } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../../_variants";

const Blog = () => {

  const items = [
    {
      id: 0,
      img: "../../../../../../../src/assets/Images/crop_center1.avif",
    },
    {
      id: 1,
      img: "../../../../../../../src/assets/Images/crop_center2.avif",
    },
    {
      id: 2,
      img: "../../../../../../../src/assets/Images/crop_center3.avif",
    },
    {
      id: 3,
      img: "../../../../../../../src/assets/Images/crop_center4.avif",
    },
    {
      id: 4,
      img: "../../../../../../../src/assets/Images/crop_center5.avif",
    },
    {
      id: 5,
      img: "../../../../../../../src/assets/Images/crop_center6.avif",
    },
    {
      id: 6,
      img: "../../../../../../../src/assets/Images/crop_center7.avif",
    },
    {
      id: 7,
      img: "../../../../../../../src/assets/Images/crop_center8.avif",
    },
    {
      id: 8,
      img: "../../../../../../../src/assets/Images/crop_center9.avif",
    },
    {
      id: 9,
      img: "../../../../../../../src/assets/Images/crop_center10.avif",
    },
    {
      id: 10,
      img: "../../../../../../../src/assets/Images/crop_center11.avif",
    },
  ];

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="md:h-full flex items-center">
        <div className="container py-20 mx-auto">
          <div className="text-center mb-12">
            <BestsellerHeader
              title="latest blog posts"
              subTitle="There are latest blog posts"
            />
          </div>
          <div className="container m-auto">
            <div className="mt-10">
            <Slider {...settings}>
              {items.map((item) => (
                <div key={item.id} className="h-[450px] text-black rounded-xl">
                  <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.6}}>
                   <div className="w-full flex justify-center items-center">
                    <img src={item.img} alt="" className="h-52 w-full"/>
                  </div> 
                  </motion.div>
                  <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.6}}>
                  <div className="flex flex-col justify-center items-start gap-3 p-2">
                    <h1 className="text-xl font-semibold">Temporibus autem quibusdam</h1>
                    <div className="flex justify-between gap-3 items-center">
                        <div className="flex items-center gap-1">
                        <MdCalendarMonth/>
                        <span>Oct, 24, 18</span>
                        </div>
                        <h4>Boyka Demo Admin</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, suscipit?</p>
                  </div>
                </motion.div>
                </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
