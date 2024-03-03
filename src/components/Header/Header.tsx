"use client";
import React, { useEffect, useState } from "react";

import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { Social } from "../Social";
import { screenSizeMore767 } from "@/helpers/screenSizeMore767";
import { Logo } from "../Logo";

import styles from "./Header.module.scss";
import { BurgerButton } from "../BurgerButton";
import { BurgerMenu } from "../BurgerMenu";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

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
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <Logo />
          {isWideScreen ? (
            <Navigation />
          ) : (
            <BurgerButton
              menuIsActive={menuIsActive}
              setMenuIsActive={setMenuIsActive}
            />
          )}
          {isWideScreen && <Social />}
        </div>
      </Container>
      {!isWideScreen && (
        <BurgerMenu
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
        />
      )}
    </header>
  );
};

export { Header };
