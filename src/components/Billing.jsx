import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles/style";
import { motion } from "framer-motion";

const Billing = () => {
  const animationLeft = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };

  const animationRight = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }
    })
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      id="product"
      className={layout.sectionReverse}
    >
      <div className={layout.sectionImgReverse}>
        <motion.img
          variants={animationLeft}
          custom={3}
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <motion.h2 variants={animationRight} custom={2} className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing & invoicing.
        </motion.h2>
        <motion.p
          variants={animationRight}
          custom={3}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </motion.p>
        <motion.div
          variants={{
            hidden: {
              y: 100,
              opacity: 0
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.8 }
            }
          }}
          className="flex flex-row flex-wrap sm:mt-10 mt-6 "
        >
          <img
            src={apple}
            alt="apple"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Billing;
