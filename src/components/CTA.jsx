import React from "react";
import styles from "../styles/style";
import { MButton } from "./Button";
import { motion } from "framer-motion";

const CTA = () => {
  const animationTop = {
    hidden: {
      y: 50,
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
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <motion.div variants={animationTop} custom={3} className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </motion.div>
      <motion.div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <MButton  variants={animationTop} custom={3}/>
      </motion.div>
    </motion.section>
  );
};
export default CTA;
