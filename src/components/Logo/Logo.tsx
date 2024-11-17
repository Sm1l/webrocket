import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../../public/images/logo.svg";
import logoWithoutCircle from "../../../public/images/logoWithoutCircle.svg";
import circle from "../../../public/images/circle.svg";

import styles from "./Logo.module.scss";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const circleRef = useRef<HTMLImageElement>(null);

  // const [isPaused, setIsPaused] = useState(false); // Флаг для паузы
  // const [angle, setAngle] = useState(0); // Текущий угол на пути

  const [isPaused, setIsPaused] = useState(false); // Флаг для паузы
  const [angle, setAngle] = useState(0); // Текущий угол на пути

  const radiusX = 62; // Горизонтальный радиус
  const radiusY = 20; // Вертикальный радиус
  const speed = 0.01; // Скорость изменения угла (радиан за кадр)
  const pauseDuration = 3000; // Пауза 3 секунды

  // useAnimationFrame(() => {
  //   if (isPaused) return; // Если анимация на паузе, выходим

  //   // Обновляем угол для движения
  //   const newAngle = angle + speed;
  //   setAngle(newAngle);

  //   // Вычисляем координаты по эллиптической траектории
  //   const x = radiusX * Math.cos(newAngle);
  //   const y = radiusY * Math.sin(newAngle);

  //   // Устанавливаем новые координаты круга
  //   if (circleRef.current) {
  //     circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
  //   }

  //   // Проверяем завершение полного круга
  //   if (newAngle >= Math.PI * 2) {
  //     setIsPaused(true); // Включаем паузу
  //     setAngle(0); // Сбрасываем угол после полного оборота

  //     // Возобновляем анимацию после 3-секундной паузы
  //     setTimeout(() => setIsPaused(false), pauseDuration);
  //   }
  // });

  // const pauseAngles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  const pauseAngles = [Math.PI / 2]; //!странное поведение
  const angleTolerance = 0.02; // Допуск для проверки угла

  useAnimationFrame(() => {
    if (isPaused) return; // Если анимация на паузе, выходим

    // Обновляем угол для движения
    const newAngle = angle + speed;
    setAngle(newAngle % (2 * Math.PI)); // Поддерживаем угол в диапазоне от 0 до 2π

    // Проверяем, достигли ли одного из углов для паузы
    const shouldPause = pauseAngles.some((pauseAngle) => Math.abs(newAngle - pauseAngle) < angleTolerance);

    if (shouldPause) {
      setIsPaused(true); // Ставим анимацию на паузу

      // Возобновляем анимацию после паузы
      setTimeout(() => setIsPaused(false), pauseDuration);
    }

    // Вычисляем координаты по эллиптической траектории
    const x = radiusX * Math.cos(newAngle);
    const y = radiusY * Math.sin(newAngle);

    // Устанавливаем новые координаты круга
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  return (
    <div className={styles.logo}>
      <h1 className={styles.logoTitle}>Веброкет</h1>
      <Link href="/">
        {/* <Image className={styles.logoImg} src={logoWithoutCircle} alt="Веброкет" priority /> */}
        <Image className={styles.logoImg} src={logo} alt="Веброкет" priority />
        {/* //!del */}
      </Link>
      <motion.img ref={circleRef} className={styles.circle} src={circle.src} alt="Веброкет" />
    </div>
  );
};

export { Logo };
