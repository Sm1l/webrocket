"use client";
import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { screenSizeMore767 } from "@/helpers/screenSizeMore767";
import { Logo } from "../Logo";
import { motion } from "framer-motion";

import styles from "./Header.module.scss";
import { BurgerButton } from "../BurgerButton";
import { BurgerMenu } from "../BurgerMenu";
import { appearAnimation } from "@/assets/animations";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(screenSizeMore767);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <motion.header
      className={styles.header}
      initial="initial"
      whileInView="animate"
      variants={appearAnimation}
      custom={1}
      viewport={{ amount: 0.2, once: true }}
    >
      <Container>
        <div className={styles.headerContainer}>
          <Logo />
          {isWideScreen ? (
            <Navigation />
          ) : (
            <BurgerButton menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
          )}
          {isWideScreen && <div />}
        </div>
      </Container>
      {!isWideScreen && <BurgerMenu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />}
    </motion.header>
  );
};

export { Header };
