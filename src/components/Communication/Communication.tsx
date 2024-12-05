import React from "react";

import styles from "./Communication.module.scss";
import { Contacts } from "../Contacts";

interface CommunicationProps {}

const Communication: React.FC<CommunicationProps> = () => {
  return (
    <section className={styles.communication} id="communication">
      <Contacts />
    </section>
  );
};

export { Communication };
