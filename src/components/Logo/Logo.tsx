import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logoWithoutCircle from "../../../public/images/logoWithoutCircle.svg";
import circle from "../../../public/images/circle.svg";
import { screenSizeMore767 } from "@/helpers/screenSizeMore767";

import styles from "./Logo.module.scss";
import Link from "next/link";
import { motion, useAnimationFrame } from "framer-motion";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const circleRef = useRef<HTMLImageElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [angle, setAngle] = useState(0);

  const [radiusX, setRadiusX] = useState(62); // Горизонтальный радиус
  const [radiusY, setRadiusY] = useState(20); // Вертикальный радиус
  const [pauseAngles, setPauseAngles] = useState([Math.PI * 1.737]); // Углы для паузы
  const speed = 0.02; // Скорость изменения угла (радиан за кадр)
  const pauseDuration = 5000; // Пауза 3 секунды
  const angleTolerance = 0.01; // Допуск для проверки угла

  const updateRadii = () => {
    if (screenSizeMore767()) {
      setRadiusX(82);
      setRadiusY(27);
      setPauseAngles([Math.PI * 1.705]);
    } else {
      setRadiusX(62);
      setRadiusY(20);
      setPauseAngles([Math.PI * 1.737]);
    }
  };

  useEffect(() => {
    updateRadii();
    window.addEventListener("resize", updateRadii);

    return () => {
      window.removeEventListener("resize", updateRadii);
    };
  }, []);

  useAnimationFrame(() => {
    if (isPaused) return;

    const newAngle = angle + speed;
    setAngle(newAngle % (2 * Math.PI));
    const shouldPause = pauseAngles.some((pauseAngle) => Math.abs(newAngle - pauseAngle) < angleTolerance);

    if (shouldPause) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), pauseDuration);
    }

    const x = radiusX * Math.cos(newAngle);
    const y = radiusY * Math.sin(newAngle);

    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  return (
    <div className={styles.logo}>
      <h1 className={styles.logoTitle}>Веброкет</h1>
      <Link href="/">
        <Image className={styles.logoImg} src={logoWithoutCircle} alt="Веброкет" priority />
      </Link>
      <motion.img ref={circleRef} className={styles.circle} src={circle.src} alt="Веброкет" />
    </div>
  );
};

export { Logo };
