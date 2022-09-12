import React from "react";
import { stats } from "../constants";
import styles from "../styles/style";
import { motion } from "framer-motion";

const Stats = () => {
  const animation = {
    hidden: {
      y: 100,
      opacity: 0
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      custom={1}
      variants={animation}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map(item => (
        <div key={item.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {item.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[27px] leading-[21px] text-gradient uppercase ml-3">
            {item.title}
          </p>
        </div>
      ))}
    </motion.section>
  );
};

export default Stats;
