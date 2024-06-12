import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo.svg";

import styles from "./Logo.module.scss";
import Link from "next/link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.logoTitle}>Веброкет</h1>
      <Link href="/">
        <Image className={styles.logoImg} src={logo} alt="Веброкет" priority />
      </Link>
    </div>
  );
};

export { Logo };
