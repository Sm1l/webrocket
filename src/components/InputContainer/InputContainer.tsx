import { forwardRef } from "react";

import { motion } from "framer-motion";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import styles from "./InputContainer.module.scss";

interface InputContainerProps {
  inputName: string;
  inputId: string;
  inputType: string;
  inputPlaceholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputContainer = forwardRef<HTMLInputElement, InputContainerProps>(
  ({ inputName, inputId, inputType, inputPlaceholder, register, error }, ref) => {
    return (
      <div className={styles.inputContainer} ref={ref}>
        <label htmlFor={inputId}>{inputName}</label>
        <input
          className={error ? `${styles.input} ${styles.inputError}` : styles.input}
          id={inputId}
          type={inputType}
          placeholder={inputPlaceholder}
          {...register}
        />
        <div className={styles.error}>{error && <span>{error?.message ?? "Ошибка"}</span>}</div>
      </div>
    );
  }
);

InputContainer.displayName = "InputContainer";
export { InputContainer };

export const MInputContainer = motion(InputContainer);
