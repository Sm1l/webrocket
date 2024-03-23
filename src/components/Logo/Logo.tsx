import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.svg";

import styles from "./Logo.module.scss";
import Link from "next/link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.logoTitle}>ВЭБ рокет</h1>
      <Link href="/">
        <Image className={styles.logoImg} src={logo} alt="ВЕБ рокет" priority />
      </Link>
    </div>
  );
};

export { Logo };
