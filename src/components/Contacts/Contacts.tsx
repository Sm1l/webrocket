"use client";
import React from "react";

import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { appearAnimationTop } from "../../assets/animations";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <motion.section
      className={styles.contacts}
      id="contacts"
      whileInView="animate"
      initial="initial"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.h2 variants={appearAnimationTop} custom={1}>
        Наши контакты
      </motion.h2>
      <div className={styles.contactsContainer}>
        <motion.h3 variants={appearAnimationTop} custom={2} className={styles.company}>
          ООО &quot;Веброкет&quot;
        </motion.h3>
        <motion.a className={styles.link} href="tel:+79964165496" variants={appearAnimationTop} custom={3}>
          <h3>+7 (996) 416-54-96</h3>
        </motion.a>
        <motion.a
          className={styles.link}
          href="mailto:nickstepanovdev@gmail.com&subject=ВЕБ рокет у меня есть вопрос!"
          variants={appearAnimationTop}
          custom={4}
          >
          <h3>nickstepanovdev@gmail.com</h3>
        </motion.a>
        <motion.a
          className={styles.link}
          href="https://t.me/nickstepanov"
          variants={appearAnimationTop}
          custom={5}
          >
          <h3>Telegram: @nickstepanov</h3>
        </motion.a>
        <motion.div className={styles.legal} variants={appearAnimationTop} custom={6}>
          <motion.p> ОГРН: 1232300054755</motion.p>
          <motion.p>ИНН: 2373024287</motion.p>
          <motion.p>КПП: 237301001</motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { Contacts };
