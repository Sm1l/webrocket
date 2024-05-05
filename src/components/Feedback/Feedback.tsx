"use client";
import React from "react";

import styles from "./Feedback.module.scss";
import { FeedbackForm } from "../FeedbackForm";
import { motion } from "framer-motion";
import { appearAnimationTop } from "../../assets/animations";

interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  return (
    <motion.section
      className={styles.feedback}
      id="feedback"
      initial="initial"
      whileInView="animate"
      variants={appearAnimationTop}
      viewport={{ amount: 0.3, once: true }}
    >
      <h3>Оставьте заявку и мы c Вами свяжемся</h3>
      <FeedbackForm />
    </motion.section>
  );
};

export { Feedback };
