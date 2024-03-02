// "use client";

import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { Logo } from "../Logo";
import { Social } from "../Social";
import { NavigationFooter } from "../NavigationFooter";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  // const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const handleResize = () => {
  //       setIsWideScreen(window.innerWidth > 767);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, []);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <Logo />
          {/* {typeof window !== "undefined" && isWideScreen && (
            <NavigationFooter />
          )} */}
          <NavigationFooter />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
