import React from "react";
import { feedback } from "../constants";
import styles from "../styles/style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  const animationTop = {
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
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient -right-[50%]" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <motion.h1 variants={animationTop} custom={3} className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us
        </motion.h1>
        <div className="w-full md:mt-0 mt-6">
          <motion.p
            variants={animationTop}
            custom={3}
            className={`${styles.paragraph} text-left max-w-[450px]`}
          >
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={animationTop}
        custom={4}
        className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container"
      >
        {feedback.map(item => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </motion.div>
    </motion.section>
  );
};
export default Testimonials;
