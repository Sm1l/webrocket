import React from "react";

import styles from "./ReviewBubble.module.scss";

interface ReviewBubbleProps {}

const ReviewBubble: React.FC<ReviewBubbleProps> = () => {
  return (
    <div className={styles.reviewBubble}>
      <span></span>
      <span></span>
    </div>
  );
};

export { ReviewBubble };
