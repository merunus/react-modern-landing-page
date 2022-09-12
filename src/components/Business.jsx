import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles/style";
import { MButton } from "./Button";
import { motion } from "framer-motion";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card cursor-pointer`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
    </div>
  </div>
);

const Business = () => {
  const animation = {
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
  return (
    <motion.section initial="hidden" whileInView="visible" id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 custom={1} variants={animation} className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </motion.h2>
        <motion.p
          custom={2}
          variants={animation}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </motion.p>
        <MButton custom={3} variants={animation} styles="mt-10" />
      </div>

      <motion.div
        variants={{
          hidden: {
            x: 100,
            opacity: 0
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.4 }
          }
        }}
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Business;
