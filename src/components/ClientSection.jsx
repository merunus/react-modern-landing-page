import React from "react";
import { clients } from "../constants";
import styles from "../styles/style";
import { motion } from "framer-motion";

const ClientSection = () => {
  const animation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5 }
    }
  };
  return (
    <motion.section initial="hidden" whileInView="visible" className={`${styles.flexCenter} my-4`}>
      <motion.div
        variants={animation}
        custom={2}
        className={`${styles.flexCenter} flex-wrap w-full`}
      >
        {clients.map(item => (
          <div
            key={item.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={item.logo}
              alt="client"
              className={`sm:w-[192px] w-[100px] object-contain cursor-pointer mt-10 ${
                item.id === "client-3" && "mb-3.5"
              }`}
            />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};
export default ClientSection;
