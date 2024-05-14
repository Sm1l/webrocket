"use client";
import { appearAnimationRight, appearAnimationRocket } from "@/assets/animations";
import { MSingleQuestion } from "@/components/SingleQuestion";
import { questionsData } from "@/Data/QuestionsData";
import { motion } from "framer-motion";
import React from "react";

import styles from "./QuestionsContent.module.scss";

interface QuestionsContentProps {}

const QuestionsContent: React.FC<QuestionsContentProps> = () => {
  return (
    <motion.div
      className={styles.questionsContent}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.h2 className={styles.title} variants={appearAnimationRight} custom={1}>
        Вопросы
      </motion.h2>
      {questionsData.map((question, index) => (
        <MSingleQuestion key={question.id} question={question} variants={appearAnimationRocket} custom={index + 2} />
      ))}
    </motion.div>
  );
};

export { QuestionsContent };
