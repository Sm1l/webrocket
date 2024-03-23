import React from "react";

import styles from "./Navigation.module.scss";
import Link from "next/link";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <Link className={styles.link} href="/#projects">
        Наши проекты
      </Link>
      <Link className={styles.link} href="/#about">
        О студии
      </Link>
      <Link className={styles.link} href="/#contacts">
        Контакты
      </Link>
    </nav>
  );
};

export { Navigation };
