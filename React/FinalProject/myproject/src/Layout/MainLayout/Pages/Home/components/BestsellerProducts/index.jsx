import React, { useContext } from "react";
import CardItem from "../CardItem";
import { ProductContext } from "../../../../../../Contexts/ProductContext";
import BestsellerHeader from "../BestsellerHeader";
import Slider from "react-slick";


const BestSellerProducts = () => {
  const { products } = useContext(ProductContext);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2 ,
    row:1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="pt-16 h-full bg-white container mx-auto">
      <BestsellerHeader
        title="Bestseller Products"
        subTitle="Most Trendy 2018 Clother"
      />
      <div>
      <Slider {...settings}>
        {products.map((prod) => {
          return <CardItem key={prod._id} product={prod} />;
        })}
        </Slider>
      </div>
    </section>
  );
};

export default BestSellerProducts;
