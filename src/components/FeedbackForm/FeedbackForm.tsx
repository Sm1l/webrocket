"use client";

import React from "react";

import { saveDataToFirebase } from "@/firebase/saveDataToFirebase";

import { SubmitHandler, useForm } from "react-hook-form";

import { appearAnimationTop } from "@/assets/animations";
import { motion } from "framer-motion";
import { MButton } from "../Button";
import { MInputContainer } from "../InputContainer";
import styles from "./FeedbackForm.module.scss";

export type TForm = {
  name: string;
  tel: number;
  email: string;
};

interface FeedbackFormProps {
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ setFeedbackSent }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TForm> = (data) => {
    saveDataToFirebase(data);
    reset();
    setFeedbackSent(true);
  };

  return (
    <motion.form
      className={styles.feedbackForm}
      onSubmit={handleSubmit(onSubmit)}
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.3, once: true }}
    >
      <MInputContainer
        inputName="Имя"
        inputId="name"
        inputType="text"
        inputPlaceholder="Иван"
        register={register("name", {
          required: "Это поле обязательно",
          minLength: { value: 2, message: "Минимум 2 символа" },
        })}
        error={errors.name}
        variants={appearAnimationTop}
        viewport={{ amount: 0.3, once: true }}
        custom={1}
      />

      <MInputContainer
        inputName="Номер телефона"
        inputId="tel"
        inputType="tel"
        inputPlaceholder="+7 (900) 120-30-40"
        register={register("tel", {
          required: "Это поле обязательно",
          pattern: {
            value: /^((\+7|7|8)+([0-9]){10})$/,
            message: "Введите корректный телефон",
          },
        })}
        error={errors.tel}
        variants={appearAnimationTop}
        custom={2}
      />

      <MInputContainer
        inputName="Электронная почта"
        inputId="email"
        inputType="email"
        inputPlaceholder="E-mail"
        register={register("email", {
          required: "Это поле обязательно",
          pattern: {
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            message: "Введите корректный e-mail",
          },
        })}
        error={errors.email}
        variants={appearAnimationTop}
        custom={3}
      />

      <MButton
        text="Оставить заявку"
        type="submit"
        arrow={true}
        disabled={!isValid}
        variants={appearAnimationTop}
        custom={4}
      />
    </motion.form>
  );
};

export { FeedbackForm };
