import React from "react";

import Image from "next/image";
import { Button } from "../Button";
import backgroundImage from "../../../public/images/figure1.png";

import styles from "./Welcome.module.scss";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <section className={styles.welcome} id="welcome">
      <div className={styles.contentContainer}>
        <h2>
          Разработка сайтов <br />
          Outsourse <br />
          Outstaff
        </h2>
        <p>
          Предоставляем широкий спектр услуг, включая создание и дизайн сайтов,
          контент-маркетинг, контекстную рекламу и другое. <br /> Обеспечим
          эффективную работу сайта и индивидуальный подход к каждому заказу.
        </p>
        <Button text="Оставить заявку" type="button" arrow={true} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.backgroundImg}
          src={backgroundImage}
          alt="background image"
          priority
        />
      </div>
    </section>
  );
};

export { Welcome };
