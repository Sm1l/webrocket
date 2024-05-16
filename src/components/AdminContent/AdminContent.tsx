"use client";
import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { loginWithFirebase } from "@/firebase/loginWithFirebase";
import { Button } from "../Button";
import { InputContainer } from "../InputContainer";
import styles from "./AdminContent.module.scss";

export type TAdminForm = {
  email: string;
  password: string;
};

interface AdminContentProps {}

const AdminContent: React.FC<AdminContentProps> = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(undefined);
  const [adminEmail, setAdminEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TAdminForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TAdminForm> = (data) => {
    loginWithFirebase(data.email, data.password, setIsAdmin);
    setAdminEmail(data.email);
    reset();
  };

  const returnName = (email: string) => {
    if (email === "konstantin2k@bk.ru") {
      return "Костя";
    } else if (email === "nickstepanovdev@gmail.com") {
      return "Никита";
    }
  };

  return (
    <div className={styles.adminContent}>
      {isAdmin === undefined && (
        <form className={styles.adminForm} onSubmit={handleSubmit(onSubmit)}>
          <InputContainer
            inputName="Электронная почта"
            inputId="email"
            inputPlaceholder="Введите e-mail"
            inputType="email"
            register={register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: "Введите корректный e-mail",
              },
            })}
            error={errors.email}
          />

          <InputContainer
            inputId="password"
            inputName="Пароль"
            inputPlaceholder="Введите пароль"
            inputType="password"
            register={register("password", {
              required: "Это поле обязательно",
              minLength: { value: 4, message: "Минимум 4 символа" },
            })}
            error={errors.password}
          />
          <Button type="submit" text="Войти" arrow={true} disabled={!isValid} />
        </form>
      )}
      {isAdmin === true && (
        <p className={styles.adminText}>Привет, {returnName(adminEmail)}! Посмотри кто тебе сегодня написал.</p>
      )}
      {isAdmin === false && (
        <div className={styles.containerTryAgain}>
          <p className={styles.adminForm}>
            Ошибка аутентификации. &thinsp;
            <Button type="button" text="Попробуйте ещё раз" onClick={() => setIsAdmin(undefined)}>
              Попробуйте снова.
            </Button>
          </p>
        </div>
      )}
    </div>
  );
};

export { AdminContent };
