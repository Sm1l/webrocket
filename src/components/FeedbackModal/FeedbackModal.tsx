"use client";
// import { motion } from "framer-motion";

import React, { useEffect, useState } from "react";

import styles from "./FeedbackModal.module.scss";

import { feedbackModalVariants } from "./feedbackModalVariants";

interface FeedbackModalProps {
  submitModalIsVisible: boolean;
  closeModalHandleClick: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ submitModalIsVisible, closeModalHandleClick }) => {
  const [countdown, setCountdown] = useState(10);

  //*disable scroll
  useEffect(() => {
    if (submitModalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [submitModalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (submitModalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [submitModalIsVisible]);

  //*close modal 10 sec
  useEffect(() => {
    if (submitModalIsVisible) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
        console.log("clearInterval");
      };
    }
  }, [submitModalIsVisible]);

  useEffect(() => {
    if (countdown === 0) {
      closeModalHandleClick();
    }
  }, [countdown, closeModalHandleClick]);

  return (
    <div className={styles.overlay} onClick={closeModalHandleClick}>
      <div
        className={styles.container}
        onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}
        // initial={"hidden"}
        // animate={"visible"}
        // exit={"exit"}
        // key="container"
        // transition={{
        //   duration: 0.5,
        //   type: "spring",
        // }}
        // variants={modalVariants}
      >
        <div className={styles.top}>
          <p>{countdown} сек.</p>
          <button className={styles.close} onClick={closeModalHandleClick}></button>
        </div>
        <p className={styles.text}>
          <span>Спасибо!</span>
          Ваша заявка принята! В ближайшее время мы обязательно с Вами свяжемся!
        </p>
      </div>
    </div>
  );
};

export { FeedbackModal };
