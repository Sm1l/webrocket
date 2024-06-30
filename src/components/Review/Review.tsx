"use client";
import React from "react";
import { motion } from "framer-motion";

import styles from "./Review.module.scss";
import { ReviewSlider } from "../ReviewSlider";
import { appearAnimation, appearAnimationRight } from "@/assets/animations";

interface ReviewProps {}

const Review: React.FC<ReviewProps> = () => {
  return (
    <motion.section
      className={styles.review}
      id="review"
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2 variants={appearAnimationRight} custom={1}>
        Отзывы
      </motion.h2>
      <motion.div variants={appearAnimation} custom={2}>
        <ReviewSlider />
      </motion.div>
    </motion.section>
  );
};

export { Review };
