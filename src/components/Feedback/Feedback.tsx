"use client";
import React, { useState } from "react";

import styles from "./Feedback.module.scss";
import { FeedbackForm } from "../FeedbackForm";
import { motion, AnimatePresence } from "framer-motion";
import { appearAnimationTop, disappearAnimationForm, appearAnimationForm } from "../../assets/animations";
import { FeedbackClose } from "../FeedbackClose";

interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false); //!false

  return (
    <motion.section
      className={styles.feedback}
      initial="initial"
      whileInView="animate"
      variants={appearAnimationTop}
      viewport={{ amount: 0.3, once: true }}
      id="feedback"
    >
      <AnimatePresence>
        {feedbackSent ? (
          <motion.div key="close" variants={appearAnimationForm} initial="initial" animate="animate">
            <FeedbackClose />
          </motion.div>
        ) : (
          <motion.div
            className={styles.feedbackStart}
            key="form"
            variants={disappearAnimationForm}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h3>Оставьте заявку и мы c Вами свяжемся</h3>
            <FeedbackForm setFeedbackSent={setFeedbackSent} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export { Feedback };
