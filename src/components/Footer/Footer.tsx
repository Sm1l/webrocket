"use client";
import React, { useState, useEffect } from "react";

import { Container } from "../Container";
import { Social } from "../Social";
import { NavigationFooter } from "../NavigationFooter";
import { motion } from "framer-motion";

import styles from "./Footer.module.scss";
import { screenSizeMore767 } from "@/helpers/screenSizeMore767";
import { appearAnimation } from "@/assets/animations";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

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
    <footer className={styles.footer}>
      <Container>
        <motion.div
          className={styles.footerContainer}
          initial="initial"
          whileInView="animate"
          variants={appearAnimation}
          custom={1}
          viewport={{ amount: 0.2, once: true }}
        >
          <NavigationFooter />
          {!isWideScreen && <Social />}
        </motion.div>
      </Container>
    </footer>
  );
};

export { Footer };
