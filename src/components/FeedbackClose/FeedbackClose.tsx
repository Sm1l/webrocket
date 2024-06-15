import React from "react";

import styles from "./FeedbackClose.module.scss";

interface FeedbackCloseProps {}

const FeedbackClose: React.FC<FeedbackCloseProps> = () => {
  return (
    <div className={styles.feedbackClose}>
      <p className={styles.title}>Спасибо за заявку!</p>
      <p>В ближайшее время мы обязательно с Вами свяжемся!</p>
    </div>
  );
};

export { FeedbackClose };
