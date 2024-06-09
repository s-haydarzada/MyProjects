import React from "react";
import { bg1, bg2 } from "../../../../../../assets/Images";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../../_variants"; 

const SingleCart = () => {
  return (
    <section className="pt-28 pb-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mx-auto cursor-pointer px-5">
        <div className="max-w-[600px] w-full cursor-pointer relative">
          <div className="absolute opacity-0 hover:opacity-100 transition-all duration-700 left-[10px] border-l-2 border-t-2 top-[10px] border-b-2 -bottom-[-10px] right-[10px] border-r-2 border-x-green-50 shadow-2xl"></div>
          <Link to={"/shop"}>
            <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
            <img src={bg1} alt="" />
            </motion.div>
          </Link>
        </div>
        <div className="max-w-[600px] w-full cursor-pointer relative">
          <div className="absolute opacity-0 hover:opacity-100 transition-all duration-700 left-[10px] border-l-2 border-t-2 top-[10px] border-b-2 -bottom-[-10px] right-[10px] border-r-2 border-x-green-50 shadow-2xl"></div>
          <Link to={"/shop"}>
          <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.4}}>
            <img src={bg2} alt="" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleCart;
