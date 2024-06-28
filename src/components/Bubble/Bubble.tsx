import React from "react";

import styles from "./Bubble.module.scss";

interface BubbleProps {
  animate: "flyAway" | "orbital";
}

const Bubble: React.FC<BubbleProps> = ({ animate }) => {
  return (
    <div className={`${styles.bubble} ${animate === "orbital" ? styles.orbital : styles.flyAway}`}>
      <span></span>
      <span></span>
    </div>
  );
};

export { Bubble };
