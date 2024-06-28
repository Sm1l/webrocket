"use client";
import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { loginWithFirebase } from "@/firebase/loginWithFirebase";
import { Button } from "../Button";
import { InputContainer } from "../InputContainer";
import styles from "./AdminContent.module.scss";
import { AdminLoginFalse } from "../AdminLoginFalse";
import { AdminPanel } from "../AdminPanel";

export type TAdminForm = {
  email: string;
  password: string;
};

interface AdminContentProps {}

const AdminContent: React.FC<AdminContentProps> = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | undefined>(undefined);
  const [adminId, setAdminId] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<TAdminForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TAdminForm> = (data) => {
    loginWithFirebase(data.email, data.password, setIsAdmin, setAdminId);
    reset();
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
      {isAdmin === true && <AdminPanel adminId={adminId} />}
      {isAdmin === false && <AdminLoginFalse setIsAdmin={setIsAdmin} />}
    </div>
  );
};

export { AdminContent };
