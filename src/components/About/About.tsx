// "use client";
import React from "react";

import { RoundElement } from "../RoundElement";
import styles from "./About.module.scss";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.topContainer}>
          <h2>О студии</h2>
          <p>
            Мы занимаемся разработкой сайтов и приложений для самых разных сфер, одинаковое внимание уделяем бэкенд и
            фронтенд разработке.
            <br /> Также у нас вы можете заказать дизайн для своего проекта, наши специалисты следят за современными
            трендами дизайна и создают наиболее релевантные проекты. <br />
            Для готового бизнеса мы можем настроить контектную или таргетированную рекламу.
          </p>
        </div>
        <div className={styles.bottomContainer}>
          <h3>Направления работы</h3>
          <div className={styles.roundElementContainer}>
            <RoundElement text="Figma" size="s" />
            <RoundElement text="Next.js" size="m" />
            <RoundElement text="Node.js" size="l" />
            <RoundElement text="TypeScript" size="xl" />
            <RoundElement text="React.js" size="l" />
            <RoundElement text="UX/UI" size="m" />
            <RoundElement text="Java" size="s" />
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </section>
  );
};

export { About };
