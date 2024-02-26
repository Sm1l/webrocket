import React from "react";

import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { Social } from "../Social";

import styles from "./Header.module.scss";
import { Logo } from "../Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <Logo />
          <Navigation />
          <Social />
        </div>
      </Container>
    </header>
  );
};

export { Header };
