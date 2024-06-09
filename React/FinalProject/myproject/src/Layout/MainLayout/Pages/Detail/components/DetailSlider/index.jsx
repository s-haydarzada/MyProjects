import React, { useContext } from 'react'
import Slider from "react-slick";
import { ProductContext } from '../../../../../../Contexts/ProductContext';
import CardItem from '../../../Home/components/CardItem';
import BestsellerHeader from '../../../Home/components/BestsellerHeader';


const DetailSlider = () => {
    const { products } = useContext(ProductContext);

    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      slidesPerRow: 1 ,
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
    <div className='container mx-auto'>
         <BestsellerHeader
              title="Related Product"
              subTitle="Most Trendy 2018 Clother"
            />
        <Slider {...settings}>
            {products.map((prod) => (
              <CardItem key={prod._id} product={prod} />
            ))}
            </Slider>
      
    </div>
  )
}

export default DetailSlider
