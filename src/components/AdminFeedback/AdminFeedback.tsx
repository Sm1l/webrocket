"use client";
import React from "react";

import styles from "./AdminFeedback.module.scss";
import { TFirebaseData } from "@/firebase/getDataFromFirebase";
import { Button } from "../Button";
import { toggleActiveStatusInFirebase } from "@/firebase/toggleActiveStatusInFirebase";
import { deleteFeedbackFromStore, toggleActiveStatusInState } from "@/store/feedbackStore";
import { deleteFeedbackFromFirebase } from "@/firebase/deleteFeedbackFromFirebase";

interface AdminFeedbackProps {
  feedback: TFirebaseData;
  setStoreIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminFeedback: React.FC<AdminFeedbackProps> = ({ feedback, setStoreIsChanged }) => {
  const TIME_TO_URGENT = 172800000;
  const IsUrgentDate = (date: number) => {
    const dateNow = Date.now();
    const urgentDate = date + TIME_TO_URGENT;
    return urgentDate < dateNow;
  };

  const getFeedbackClass = (date: number, active: boolean) => {
    if (IsUrgentDate(date) && active) {
      return `${styles.adminFeedback} ${styles.adminFeedbackUrgently}`;
    } else if (!active) {
      return `${styles.adminFeedback} ${styles.adminFeedbackClosed}`;
    }
    return `${styles.adminFeedback} `;
  };

  const toggleActiveStatusHandleClick = async () => {
    try {
      await toggleActiveStatusInFirebase(feedback.id);
      toggleActiveStatusInState(feedback.id);
      setStoreIsChanged((state) => !state);
    } catch (error) {
      console.error("Failed to update feedback status: ", error);
    }
  };

  const deleteFeedbackHandleClick = async () => {
    try {
      await deleteFeedbackFromFirebase(feedback.id);
      deleteFeedbackFromStore(feedback.id);
    } catch (error) {
      console.error("Failed to delete feedback: ", error);
    }
  };

  return (
    <div key={feedback.id} className={getFeedbackClass(feedback.date, feedback.active)}>
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
          onClick={toggleActiveStatusHandleClick}
        />
        <Button text="Delete" type="button" onClick={deleteFeedbackHandleClick} />
      </div>
    </div>
  );
};

export { AdminFeedback };
