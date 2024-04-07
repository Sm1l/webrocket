"use client";
import React, { useState, useEffect } from "react";

import { Container } from "../Container";
import { Social } from "../Social";
import { NavigationFooter } from "../NavigationFooter";

import styles from "./Footer.module.scss";
import { screenSizeMore767 } from "@/helpers/screenSizeMore767";

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
        <div className={styles.footerContainer}>
          <NavigationFooter />
          {!isWideScreen && <Social />}
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
