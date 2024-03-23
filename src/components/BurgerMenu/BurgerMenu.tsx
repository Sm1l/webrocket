import React from "react";

import styles from "./BurgerMenu.module.scss";
import Link from "next/link";
import { Social } from "../Social";

interface BurgerMenuProps {
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  menuIsActive,
  setMenuIsActive,
}) => {
  const closeHandleClick = () => {
    setMenuIsActive(!menuIsActive);
  };
  return (
    <div
      className={
        menuIsActive
          ? `${styles.burgerMenu} ${styles.active}`
          : `${styles.burgerMenu}`
      }
    >
      <div
        className={styles.background}
        onClick={() => {
          setMenuIsActive(false);
        }}
      ></div>
      <div
        className={
          menuIsActive
            ? `${styles.content} ${styles.active}`
            : `${styles.content}`
        }
      >
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                className={styles.link}
                href="/#welcome"
                onClick={closeHandleClick}
              >
                <p>Наши услуги</p>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/#projects"
                onClick={closeHandleClick}
              >
                <p>Наши проекты</p>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/#about"
                onClick={closeHandleClick}
              >
                <p>О студии</p>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/policy"
                onClick={closeHandleClick}
              >
                <p>Политика конфеденциальности</p>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/concent"
                onClick={closeHandleClick}
              >
                <p>Согласие</p>
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                href="/questions"
                onClick={closeHandleClick}
              >
                <p>Вопросы</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.contactsContainer}>
          <h3>Контакты</h3>
          <div className={styles.contacts}>
            <p>ООО &quot;ВебРокет&quot;</p>
            <a className={styles.link} href="tel:+79964165496">
              <p>+7 (996) 416-54-96</p>
            </a>
            <a
              className={styles.link}
              href="mailto:nickstepanovdev@gmail.com&subject=ВЕБ рокет у меня есть вопрос!"
            >
              <p>nickstepanovdev@gmail.com</p>
            </a>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
};

export { BurgerMenu };
