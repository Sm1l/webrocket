"use client";
import React from "react";
import { motion } from "framer-motion";

import { MRoundElement } from "../RoundElement";
import styles from "./About.module.scss";
import { appearAnimationTop, appearAnimationRight } from "../../assets/animations";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <motion.div
          className={styles.topContainer}
          whileInView="animate"
          initial="initial"
          viewport={{ amount: 0.3, once: true }}
        >
          <motion.h2 variants={appearAnimationRight} custom={1}>
            О студии
          </motion.h2>
          <motion.p variants={appearAnimationRight} custom={2}>
            Мы занимаемся разработкой сайтов и приложений для самых разных сфер, одинаковое внимание уделяем бэкенд и
            фронтенд разработке.
            <br /> Также у нас вы можете заказать дизайн для своего проекта, наши специалисты следят за современными
            трендами дизайна и создают наиболее релевантные проекты. <br />
            Для готового бизнеса мы можем настроить контектную или таргетированную рекламу.
          </motion.p>
        </motion.div>
        <motion.div
          className={styles.bottomContainer}
          whileInView="animate"
          initial="initial"
          viewport={{ amount: 0.2, once: true }}
        >
          <motion.h3 variants={appearAnimationRight} custom={1}>
            Направления работы
          </motion.h3>
          <motion.div
            className={styles.roundElementContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2, once: true }}
          >
            <MRoundElement text="Figma" size="s" variants={appearAnimationTop} custom={1} />
            <MRoundElement text="Next.js" size="m" variants={appearAnimationTop} custom={2} />
            <MRoundElement text="Node.js" size="l" variants={appearAnimationTop} custom={3} />
            <MRoundElement text="TypeScript" size="xl" variants={appearAnimationTop} custom={4} />
            <MRoundElement text="React.js" size="l" variants={appearAnimationTop} custom={5} />
            <MRoundElement text="UX/UI" size="m" variants={appearAnimationTop} custom={6} />
            <MRoundElement text="Java" size="s" variants={appearAnimationTop} custom={7} />
          </motion.div>
        </motion.div>
      </div>
      <div className={styles.imageContainer}></div>
    </section>
  );
};

export { About };
