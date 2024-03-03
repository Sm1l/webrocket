// "use client";
import React from "react";
import { slide as Burger } from "react-burger-menu";

import styles from "./BurgerContainer.module.scss";
import "./burger.scss";

interface BurgerContainerProps {}

const BurgerContainer: React.FC<BurgerContainerProps> = () => {
  return (
    <div className={styles.burgerContainer}>
      <Burger right width={"200px"}>
        <a className="menu-item" href="#home">
          Главная
        </a>
        <a className="menu-item" href="#advantages">
          Преимущества
        </a>
        <a className="menu-item" href="#services">
          Услуги
        </a>
        <a className="menu-item" href="#contacts">
          Контакты
        </a>
      </Burger>
    </div>
  );
};

export { BurgerContainer };
