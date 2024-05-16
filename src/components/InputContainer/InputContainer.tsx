import React from "react";

import styles from "./InputContainer.module.scss";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputContainerProps {
  inputName: string;
  inputId: string;
  inputType: string;
  inputPlaceholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputContainer: React.FC<InputContainerProps> = ({
  inputName,
  inputId,
  inputType,
  inputPlaceholder,
  register,
  error,
}) => {
  return (
    <div className={styles.inputContainer}>
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
};

export { InputContainer };
