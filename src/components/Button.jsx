import { forwardRef } from "react";
import React from "react";
import { motion } from "framer-motion";

const Button = forwardRef(({ styles }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-md `}
    >
      Get Started
    </button>
  );
});

export const MButton = motion(Button);

export default Button;
