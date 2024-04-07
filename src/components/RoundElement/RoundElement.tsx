"use client";
import React, { HTMLAttributes, useState } from "react";

import styles from "./RoundElement.module.scss";
import { Bubble } from "../Bubble";
import { nanoid } from "nanoid";

type TSize = "s" | "m" | "l" | "xl";

interface RoundElementProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: TSize;
}

const RoundElement: React.FC<RoundElementProps> = ({ text, size, ...props }) => {
  const roundSize = (size: TSize) => {
    switch (size) {
      case "s":
        return styles.small;
      case "m":
        return styles.medium;
      case "l":
        return styles.large;
      case "xl":
        return styles.extraLarge;
      default:
        return "";
    }
  };

  const [bubbles, setBubbles] = useState<{ [key: string]: boolean }>({});

  const handleButtonClick = () => {
    const bubbleId = nanoid();
    setBubbles((prev) => ({ ...prev, [bubbleId]: true }));

    setTimeout(() => {
      setBubbles((prev) => {
        const newBubbles = { ...prev };
        delete newBubbles[bubbleId];
        return newBubbles;
      });
    }, 6000);
  };

  return (
    <div className={`${styles.roundElement} ${roundSize(size)}`} {...props}>
      <button className={styles.roundElementButton} onClick={handleButtonClick}>
        <span>{text}</span>
        <span className={styles.shadowLeft}></span>
        <span className={styles.shadowRight}></span>
      </button>
      {Object.entries(bubbles).map(([bubbleId, isVisible]) => isVisible && <Bubble key={bubbleId} />)}
    </div>
  );
};

export { RoundElement };
