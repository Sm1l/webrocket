import React, { HTMLAttributes } from "react";

import styles from "./RoundElement.module.scss";

type TSize = "s" | "m" | "l" | "xl";

interface RoundElementProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  size: TSize;
}

const RoundElement: React.FC<RoundElementProps> = ({
  text,
  size,
  ...props
}) => {
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

  return (
    <div className={`${styles.roundElement} ${roundSize(size)}`} {...props}>
      <span>{text}</span>
    </div>
  );
};

export { RoundElement };
