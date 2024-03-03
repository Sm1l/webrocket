import React from "react";

import styles from "./NavigationFooter.module.scss";
import Link from "next/link";

interface NavigationFooterProps {}

const NavigationFooter: React.FC<NavigationFooterProps> = () => {
  return (
    <nav className={styles.navigationFooter}>
      <Link className={styles.link} href="#policy">
        Политика конфиденциальности
      </Link>
      <Link className={styles.link} href="#questions">
        Вопросы
      </Link>
      <Link className={styles.link} href="#contacts">
        Контакты
      </Link>
    </nav>
  );
};

export { NavigationFooter };
