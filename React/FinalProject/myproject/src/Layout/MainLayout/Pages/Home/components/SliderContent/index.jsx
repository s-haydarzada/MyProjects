import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../../_variants";

const SliderContent = ({
  title,
  description,
  buttonText,
  onButtonClick,
  textColor,
  buttonBgColor,
}) => {
  const contentRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      contentRef.current.classList.add("inner-content");
    } else {
      setMounted(true);
    }
  }, [mounted]);

  return (
    <div
      ref={contentRef}
      className="ml-3 flex text-white gap-7 flex-col justify-between items-start absolute top-1/2 left-16 transform -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] px-4 bg-transparent md:h-[250px] lg:h-[300px] xl:h-[350px] inner-content z-0"
      style={{ color: textColor }}
    >
      <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text">
          {title}
        </h1>
        <p className="text-xs md:text-base lg:text-lg xl:text-xl mb-4 text">
          {description}
        </p>
        <button
          className="flex items-center px-8 gap-2 bg-transparent border-[2px] py-4"
          style={{ backgroundColor: buttonBgColor }}
          onClick={onButtonClick}
        >
          <FaPlus />
          <span>{buttonText}</span>
        </button>
      </motion.div>
    </div>
  );
};

export default SliderContent;
