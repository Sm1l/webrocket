"use client";
import React from "react";

import styles from "./BurgerButton.module.scss";

interface BurgerButtonProps {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  menuIsActive,
  setMenuIsActive,
}) => {
  const buttonHandleClick = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <button
      className={
        menuIsActive
          ? `${styles.burgerButton} ${styles.close}`
          : `${styles.burgerButton}`
      }
      onClick={buttonHandleClick}
      aria-label="menu button"
    >
      <span></span>
    </button>
  );
};

export { BurgerButton };
