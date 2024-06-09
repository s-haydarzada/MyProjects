import React from "react";
import DetailContent from "./components/DetailContent/index";
import DetailReview from './components/DetailReview/index';
import DetailSlider from "./components/DetailSlider";

const Detail = () => {

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center flex-col">
      <DetailContent />
      <DetailReview/>
      <DetailSlider/>
    </section>
  );
};

export default Detail;
