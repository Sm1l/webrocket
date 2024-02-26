import React from "react";

import styles from "./Feedback.module.scss";
import { FeedbackForm } from "../FeedbackForm";

interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = () => {
  return (
    <section className={styles.feedback}>
      <h3>Оставьте заявку и мы c Вами свяжемся</h3>
      <FeedbackForm />
    </section>
  );
};

export { Feedback };
