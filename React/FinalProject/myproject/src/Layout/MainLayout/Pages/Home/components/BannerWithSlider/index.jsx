import React, { useContext } from "react";
import { poster1 } from "../../../../../../assets/Images/index";
import Slider from "react-slick";
import { ProductContext } from "../../../../../../Contexts/ProductContext";
import CardItem from "../CardItem";
import { motion } from "framer-motion";
import { fadeIn } from "./../../../../../../_variants";

const BannerWithSlider = () => {
  const customStyles = {
    color: "white",
  };
  const { products } = useContext(ProductContext);

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative">
      <div className="h-[600px] relative">
        <img src={poster1} alt="" className="h-full w-full object-cover" />
      </div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="absolute top-20 right-10 w-full md:w-[600px] text-white"
      >
        <Slider {...settings} className="bg-opacity-50 bg-transparent ml-16 rounded-md">
          {products.map((prod) => {
            return (
              <CardItem
                key={prod._id}
                product={prod}
                customStyle={customStyles}
              />
            );
          })}
        </Slider>
      </motion.div>
    </section>
  );
};

export default BannerWithSlider;
