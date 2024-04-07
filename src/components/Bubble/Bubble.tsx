import React from "react";

import styles from "./Bubble.module.scss";

interface BubbleProps {}

const Bubble: React.FC<BubbleProps> = () => {
  return (
    <div className={styles.bubble}>
      <span></span>
      <span></span>
    </div>
  );
};

export { Bubble };
