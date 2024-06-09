import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { GetSingleProduct } from "./../../../../../../services/products";
import { ProductContext } from "./../../../../../../Contexts/ProductContext";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { fadeIn } from "./../../../../../../_variants";

const DetailContent = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToBasket } = useContext(CartContext);
  const [singleItem, setSingleItem] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const product = products.find((item) => {
    return item._id === id;
  });

  const imgArray = product.images;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await GetSingleProduct(product._id);
        const singleData = res.data;
        console.log(singleData);
        if (singleData.images && singleData.images.length > 0) {
          setSingleItem(singleData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [product._id]);

  // if products is not found

  if (!singleItem) {
    return (
      <section className="h-screen flex justify-center items-center">
        <Spin />
      </section>
    );
  }

  const { title, description, productPrice, _id, salePrice } = singleItem;
  return (
    <div className="container mx-auto h-[500px] flex justify-between items-center mb-20">
      <div className="w-1/2">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {imgArray.map((item) => (
              <SwiperSlide key={item.url}>
                <img
                  src={item.url}
                  className="w-full h-[350px] custom_style_img object-cover"
                  alt="product"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {imgArray.map((item) => (
              <SwiperSlide key={item.url}>
                <img
                  src={item.url}
                  className="w-full h-[100px] custom_style_img object-cover mt-5"
                  alt="product"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <div className="w-1/2 py-16 ml-10 text-center lg:text-left flex flex-col justify-between">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1 className="text-[26px] lg:text-4xl font-medium max-w-[450px] mx-auto lg:mx-0 mb-2">
            {title}
          </h1>
          <div className="flex gap-4 items-center my-10">
            <div className="text-xl lg:text-2xl font-medium text-black">
              $ {salePrice}
            </div>
            <div className="text-lg lg:text-xl font-normal line-through text-gray-600">
              $ {productPrice}
            </div>
          </div>

          <p className="mb-8 text-sm lg:text-base py-10 overflow-hidden">
            {description}
          </p>
          <button
            onClick={() => addToBasket(_id, 1, product)}
            className="bg-primary py-4 px-8 text-white rounded-md hover:bg-gray-300 hover:text-black"
          >
            Add to cart
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailContent;
