import { Modal } from "antd";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../../../../Contexts/ProductContext";
import { CartContext } from "../../../../../../Contexts/CardContext";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../../../_variants";

const ShowModal = ({ isModalOpen, setIsModalOpen,product}) => {
  const { products } = useContext(ProductContext);
  const { addToBasket } = useContext(CartContext);
  

  const { images, title, description, productPrice,_id,salePrice } = product;
  const firstImage = images && images.length > 0 ? images[0] : null;
  const imageUrl = firstImage ? firstImage.url : null;

  if (!product) {
    return null;
  }
  
  const image = images && images.length > 0 ? images[0] : null;


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // removeFromCart(_id);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="80%"
    >
      <section className="lg:py-20 flex items-center w-full px-5">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 md:flex-none md:w-1/2 lg:w-1/3"
            >
              <div className="flex items-center justify-center mb-8 lg:mb-0 border p-2">
                <img
                  className="max-w-[200px] w-full h-[300px] lg:max-w-sm"
                  src={imageUrl}
                  alt=""
                />
              </div>
            </motion.div>

            <div className="flex-1 ml-10 text-center lg:text-left">
              <motion.div
              className="border py-14 px-5"
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h1 className="text-[26px] font-medium max-w-[450px] mx-auto lg:mx-0">
                  {title}
                </h1>
                <div className="flex gap-3">
                <div className="text-xl font-medium mb-6 text-gray-500">
                  $ {salePrice}
                </div>
                <div className="text-xl font-medium mb-6 text-red-500 line-through">
                  $ {productPrice}
                </div>
                </div>
                <p className="mb-8">{description}</p>
                <button
                  onClick={() => addToBasket(_id,1,product)}
                  className="bg-primary py-4 px-8 text-white rounded-md hover:bg-gray-300 hover:text-black"
                >
                  Add to cart
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default ShowModal;
