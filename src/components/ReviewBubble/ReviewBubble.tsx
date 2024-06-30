import React, { useState } from "react";
import { generateBubbles } from "@/helpers/generateBubbles";

import styles from "./ReviewBubble.module.scss";
import { Bubble } from "../Bubble";

interface ReviewBubbleProps {}

const ReviewBubble: React.FC<ReviewBubbleProps> = () => {
  const [bubbles, setBubbles] = useState<{ [key: string]: boolean }>({});

  const generateBubblesHandleClick = () => {
    generateBubbles(setBubbles);
  };

  return (
    <>
      <div className={styles.reviewBubble} onClick={generateBubblesHandleClick}>
        <span></span>
        <span></span>
      </div>
      {Object.entries(bubbles).map(([bubbleId, isVisible]) => isVisible && <Bubble key={bubbleId} animate="orbital" />)}
    </>
  );
};

export { ReviewBubble };
