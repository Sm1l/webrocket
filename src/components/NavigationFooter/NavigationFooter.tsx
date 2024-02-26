import React from "react";

import styles from "./NavigationFooter.module.scss";

interface NavigationFooterProps {}

const NavigationFooter: React.FC<NavigationFooterProps> = () => {
  return (
    <nav className={styles.navigationFooter}>
      <a className={styles.link} href="#policy">
        Политика конфиденциальности
      </a>
      <a className={styles.link} href="#questions">
        Вопросы
      </a>
      <a className={styles.link} href="#contacts">
        Контакты
      </a>
    </nav>
  );
};

export { NavigationFooter };
