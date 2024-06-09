import React from "react";
import { s1, s2, s3 } from "../../../../../../assets/Images/index";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../../_variants";

const SingleBanner = () => {
  return (
    <>
    <motion.div initial={{opacity:0.5,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{duration:1.5}}>
      <div className="hidden md:flex w-full h-[300px] bg-white py-10 px-12 gap-2 justify-between items-center">
        <div className="relative overflow-hidden group">
          <img
            src={s1}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="relative overflow-hidden group">
          <img
            src={s2}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="md:relative overflow-hidden group">
          <img
            src={s3}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </motion.div>
<motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.6}}>
  <div className="md:hidden sm:flex flex-col w-full bg-white py-10 px-12 justify-between items-center">
        <div className="relative overflow-hidden group mb-5">
          <img
            src={s1}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="sm:mb-5 relative overflow-hidden group mb-5">
          <img
            src={s2}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
        <div className="md:relative overflow-hidden group mb-3">
          <img
            src={s3}
            alt=""
            className="object-center w-full h-full transform scale-100 transition-all duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
</motion.div>
      
    </>
  );
};

export default SingleBanner;
