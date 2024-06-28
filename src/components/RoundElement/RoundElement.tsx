"use client";
import React, { forwardRef, HTMLAttributes, useState } from "react";

import { motion } from "framer-motion";
import { Bubble } from "../Bubble";
import styles from "./RoundElement.module.scss";
import { generateBubbles } from "@/helpers/generateBubbles";

type TSize = "s" | "m" | "l" | "xl";

interface RoundElementProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: TSize;
}

const RoundElement = forwardRef<HTMLDivElement, RoundElementProps>(({ text, size, ...props }, ref) => {
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

  const generateBubblesHandleClick = () => {
    generateBubbles(setBubbles);
  };

  return (
    <div className={`${styles.roundElement} ${roundSize(size)}`} {...props} ref={ref}>
      <button className={styles.roundElementButton} onClick={generateBubblesHandleClick}>
        <span className={styles.text}>{text}</span>
        <span className={styles.shadowLeft}></span>
        <span className={styles.shadowRight}></span>
      </button>
      {Object.entries(bubbles).map(([bubbleId, isVisible]) => isVisible && <Bubble key={bubbleId} animate="flyAway" />)}
    </div>
  );
});

RoundElement.displayName = "RoundElement";
export { RoundElement };
export const MRoundElement = motion(RoundElement);
