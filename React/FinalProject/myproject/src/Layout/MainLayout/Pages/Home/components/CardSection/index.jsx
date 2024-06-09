import React, { useContext, useState, useEffect } from "react";
import CardItem from "../CardItem";
import { ProductContext } from "./../../../../../../Contexts/ProductContext";
import Slider from "react-slick";
import CardItemSkeleton from "./../CardItemSkeleton/index";

const CardSection = () => {
  const { products } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    slidesPerRow: 2,
    row: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div>
      <section>
        <div className="container mx-auto mt-10">
          <div>
            <Slider {...settings}>
              {products.map((prod) =>
                loading ? (
                  <CardItemSkeleton key={prod._id} />
                ) : (
                  <CardItem key={prod._id} product={prod} />
                )
              )}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
