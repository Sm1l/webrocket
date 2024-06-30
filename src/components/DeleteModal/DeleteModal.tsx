"use client";

import React, { useEffect } from "react";

import styles from "./DeleteModal.module.scss";

import { appearAnimationTop } from "@/assets/animations";
import { motion } from "framer-motion";
import { Button } from "../Button";

interface DeleteModalProps {
  feedbackName: string;
  modalIsVisible: boolean;

  closeModalHandleClick: () => void;
  deleteFeedback: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  feedbackName,
  modalIsVisible,
  closeModalHandleClick,
  deleteFeedback,
}) => {
  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsVisible]);

  const deleteFeedbackHandleClick = () => {
    deleteFeedback();
    closeModalHandleClick();
  };

  return (
    <div className={styles.overlay} onClick={closeModalHandleClick}>
      <motion.div
        className={styles.container}
        onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}
        initial="initial"
        animate="animate"
        exit="initial"
        variants={appearAnimationTop}
        custom={1}
      >
        <div className={styles.top}>
          <button className={styles.close} onClick={closeModalHandleClick}></button>
        </div>
        <p className={styles.text}>Вы уверены, что хотите удалить карточку обратной связи с именем {feedbackName}?</p>
        <div className={styles.buttonsContainer}>
          <Button text="Yes" type="button" onClick={deleteFeedbackHandleClick} />
          <Button text="No" type="button" onClick={closeModalHandleClick} />
        </div>
      </motion.div>
    </div>
  );
};

export { DeleteModal };
