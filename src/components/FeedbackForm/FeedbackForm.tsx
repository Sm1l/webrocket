"use client";

import React, { useState } from "react";

import { saveDataToFirebase } from "@/firebase/saveDataToFirebase";

import { SubmitHandler, useForm } from "react-hook-form";

import { MButton } from "../Button";
import styles from "./FeedbackForm.module.scss";
import { FeedbackModal } from "../FeedbackModal";
import { AnimatePresence, motion } from "framer-motion";
import { appearAnimationTop } from "@/assets/animations";

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
    saveDataToFirebase(data);
    setSubmitModalIsVisible(true);
    reset();
  };

  return (
    <>
      <form className={styles.feedbackForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <motion.label
            htmlFor="name"
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={1}
          >
            Имя
          </motion.label>
          <motion.input
            className={errors?.name ? `${styles.input} ${styles.inputError}` : styles.input}
            id="name"
            type="text"
            placeholder="Иван"
            {...register("name", {
              required: "Это поле обязательно",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={2}
          />
          <div className={styles.error}>{errors?.name && <span>{errors?.name?.message ?? "Ошибка"}</span>}</div>
        </div>
        <div className={styles.inputContainer}>
          <motion.label
            htmlFor="tel"
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={3}
          >
            Номер телефона
          </motion.label>
          <motion.input
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
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={4}
          />
          <div className={styles.error}>{errors?.tel && <span>{errors?.tel?.message ?? "Ошибка"}</span>}</div>
        </div>
        <div className={styles.inputContainer}>
          <motion.label
            htmlFor="email"
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={5}
          >
            Электронная почта
          </motion.label>
          <motion.input
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
            initial="initial"
            whileInView="animate"
            variants={appearAnimationTop}
            viewport={{ amount: 0.3, once: true }}
            custom={6}
          />
          <div className={styles.error}>{errors?.email && <span>{errors?.email?.message ?? "Ошибка"}</span>}</div>
        </div>
        <MButton
          text="Оставить заявку"
          type="submit"
          arrow={true}
          disabled={!isValid}
          variants={appearAnimationTop}
          custom={7}
        />
      </form>
      <AnimatePresence>
        {submitModalIsVisible && (
          <FeedbackModal submitModalIsVisible={submitModalIsVisible} closeModalHandleClick={closeModalHandleClick} />
        )}
      </AnimatePresence>
    </>
  );
};

export { FeedbackForm };
