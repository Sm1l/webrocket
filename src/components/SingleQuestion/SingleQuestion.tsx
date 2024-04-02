"use client";
import React, { useState } from "react";
import { TQuestionsData } from "@/Data/QuestionsData";

import styles from "./SingleQuestion.module.scss";

interface SingleQuestionProps {
  question: TQuestionsData;
}

const SingleQuestion: React.FC<SingleQuestionProps> = ({ question }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openAnswer = () => {
    setIsOpened(!isOpened);
  };

  return (
    <button className={styles.singleQuestion} onClick={openAnswer}>
      <div className={styles.questionContainer}>
        <h3 className={styles.title}>{question.question}</h3>
        <div
          className={
            isOpened ? `${styles.plus} ${styles.isOpened}` : `${styles.plus}`
          }
        ></div>
      </div>
      <div
        className={
          isOpened
            ? `${styles.answerContainer} ${styles.isOpened}`
            : `${styles.answerContainer}`
        }
      >
        <div className={styles.answer}>
          <p>{question.answer}</p>
        </div>
      </div>
    </button>
  );
};

export { SingleQuestion };
