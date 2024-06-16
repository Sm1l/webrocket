"use client";
import React from "react";

import styles from "./AdminFeedback.module.scss";
import { TFirebaseData } from "@/firebase/getDataFromFirebase";
import { Button } from "../Button";
import { dataIsChangedInFirebaseToggle } from "@/store/dataIsChangedStore";
import { toggleActiveStatus } from "@/firebase/toggleActiveStatus";

interface AdminFeedbackProps {
  feedback: TFirebaseData;
}

const AdminFeedback: React.FC<AdminFeedbackProps> = ({ feedback }) => {
  const urgentFeedbacks = (date: number) => {
    const dateNow = Date.now();
    const urgentDate = date + 172800000; //*2 days
    if (urgentDate < dateNow) {
      return true;
    }
    return false;
  };

  const feedbackClass = (date: number, active: boolean) => {
    if (urgentFeedbacks(date) && active) {
      return `${styles.adminFeedback} ${styles.adminFeedbackUrgently}`;
    } else if (!active) {
      return `${styles.adminFeedback} ${styles.adminFeedbackClosed}`;
    }
    return `${styles.adminFeedback} `;
  };

  const markFeedbackInactive = () => {
    toggleActiveStatus(feedback.id).then(() => {
      dataIsChangedInFirebaseToggle();
    });
  };

  return (
    <div key={feedback.id} className={feedbackClass(feedback.date, feedback.active)}>
      <div className={styles.feedbackData}>
        <p>{`Имя: ${feedback.name}`}</p>
        <p>{`Дата: ${new Date(feedback.date).toLocaleString("ru-RU")}`}</p>
        <div className={styles.elementContainer}>
          <p>Телефон: </p>
          <a href={`tel:${feedback.tel}`}>{feedback.tel}</a>
        </div>
        <div className={styles.elementContainer}>
          <p>Электронная почта: </p>
          <a href={`mailto:${feedback.email}`}>{feedback.email}</a>
        </div>
      </div>
      <div className={styles.feedbackButtons}>
        <Button
          text={!feedback.active ? "Inactive" : "Mark"}
          type="button"
          active={!feedback.active}
          onClick={markFeedbackInactive}
        />
        <Button text="Delete" type="button" />
      </div>
    </div>
  );
};

export { AdminFeedback };
