import React from "react";

import styles from "./Navigation.module.scss";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <a className={styles.link} href="#projects">
        Наши проекты
      </a>
      <a className={styles.link} href="#about">
        О студии
      </a>
      <a className={styles.link} href="#contacts">
        Контакты
      </a>
    </nav>
  );
};

export { Navigation };
