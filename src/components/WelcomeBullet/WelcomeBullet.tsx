import React from "react";

import styles from "./WelcomeBullet.module.scss";
import { TWelcomeBullet } from "@/data/welcomeData";

interface WelcomeBulletProps {
  bulletsWelcomeData: TWelcomeBullet;
}

const WelcomeBullet: React.FC<WelcomeBulletProps> = ({ bulletsWelcomeData }) => {
  return (
    <div className={styles.welcomeBullet}>
      <h3 className={styles.title}>{bulletsWelcomeData.bTitle}</h3>
      <p className={styles.description}>{bulletsWelcomeData.bDescription}</p>
      <span className={styles.price}>от {bulletsWelcomeData.bPrice} ₽/час</span>
    </div>
  );
};

export { WelcomeBullet };
