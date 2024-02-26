import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button";
  text: string;
  arrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, arrow, ...props }) => {
  return (
    <button className={styles.button} type={type} {...props}>
      {text}
      {arrow && (
        <svg
          className={styles.arrow}
          width="43"
          height="15"
          viewBox="0 0 43 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.7071 8.20711C43.0976 7.81658 43.0976 7.18342 42.7071 6.79289L36.3431 0.428932C35.9526 0.0384078 35.3195 0.0384078 34.9289 0.428932C34.5384 0.819457 34.5384 1.45262 34.9289 1.84315L40.5858 7.5L34.9289 13.1569C34.5384 13.5474 34.5384 14.1805 34.9289 14.5711C35.3195 14.9616 35.9526 14.9616 36.3431 14.5711L42.7071 8.20711ZM0 8.5H42V6.5H0V8.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export { Button };
