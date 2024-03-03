import React from "react";

import { Container } from "../Container";
import { Logo } from "../Logo";
import { Social } from "../Social";
import { NavigationFooter } from "../NavigationFooter";

import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <Logo />
          <NavigationFooter />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
