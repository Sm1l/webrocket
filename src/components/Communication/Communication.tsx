import React from "react";

import styles from "./Communication.module.scss";
import { Feedback } from "../Feedback";
import { Contacts } from "../Contacts";

interface CommunicationProps {}

const Communication: React.FC<CommunicationProps> = () => {
  return (
    <div className={styles.communication}>
      <Feedback />
      <Contacts />
    </div>
  );
};

export { Communication };
