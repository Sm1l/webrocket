"use client";

import React, { useState } from "react";

import { saveDataToFirebase } from "@/firebase/saveDataToFirebase";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../Button";
import styles from "./FeedbackForm.module.scss";
import { FeedbackModal } from "../FeedbackModal";

export type TForm = {
  name: string;
  tel: number;
  email: string;
};

interface FeedbackFormProps {}

const FeedbackForm: React.FC<FeedbackFormProps> = () => {
  const [submitModalIsVisible, setSubmitModalIsVisible] = useState<boolean>(false);

  const closeModalHandleClick = () => {
    setSubmitModalIsVisible(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TForm> = (data) => {
    reset();
    saveDataToFirebase(data);
    setSubmitModalIsVisible(true);
  };

  return (
    <>
      <form className={styles.feedbackForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Имя</label>
          <input
            className={errors?.name ? `${styles.input} ${styles.inputError}` : styles.input}
            id="name"
            type="text"
            placeholder="Иван"
            {...register("name", {
              required: "Это поле обязательно",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          <div className={styles.error}>{errors?.name && <span>{errors?.name?.message ?? "Ошибка"}</span>}</div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tel">Номер телефона</label>
          <input
            className={errors?.tel ? `${styles.input} ${styles.inputError}` : styles.input}
            id="tel"
            type="tel"
            placeholder="+7 (900) 120-30-40"
            {...register("tel", {
              required: "Это поле обязательно",
              pattern: {
                value: /^((\+7|7|8)+([0-9]){10})$/,
                message: "Введите корректный телефон",
              },
            })}
          />
          <div className={styles.error}>{errors?.tel && <span>{errors?.tel?.message ?? "Ошибка"}</span>}</div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Электронная почта</label>
          <input
            className={errors?.email ? `${styles.input} ${styles.inputError}` : styles.input}
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: "Введите корректный e-mail",
              },
            })}
          />
          <div className={styles.error}>{errors?.email && <span>{errors?.email?.message ?? "Ошибка"}</span>}</div>
        </div>
        <Button text="Оставить заявку" type="submit" arrow={true} disabled={!isValid} />
      </form>
      {submitModalIsVisible && (
        <FeedbackModal submitModalIsVisible={submitModalIsVisible} closeModalHandleClick={closeModalHandleClick} />
      )}
    </>
  );
};

export { FeedbackForm };
