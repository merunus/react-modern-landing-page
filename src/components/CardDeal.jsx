import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles/style";
import { MButton } from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => {
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
    <motion.section initial="hidden" whileInView="visible" className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 variants={animationLeft} custom={2} className={styles.heading2}>
          Find a better card <br className="sm:block hidden" />
          deal in few easy steps.
        </motion.h2>
        <motion.p
          variants={animationLeft}
          custom={3}
          className={`${styles.paragraph} mt-5 max-w-[470px]`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
          tortor.ç Aliquet ultrices ac, ametau.
        </motion.p>
        <MButton custom={3.5} variants={animationLeft} styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <motion.img
          custom={3}
          variants={animationRight}
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </motion.section>
  );
};

export default CardDeal;
