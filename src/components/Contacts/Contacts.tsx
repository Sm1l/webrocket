import React from "react";

import styles from "./Contacts.module.scss";

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <section className={styles.contacts}>
      <h2>Наши контакты</h2>
      <h3>ООО &quot;ВебРокет&quot;</h3>
      <a className={styles.link} href="tel:+79964165496">
        <h3>+7 (996) 416-54-96</h3>
      </a>
      <a
        className={styles.link}
        href="mailto:nickstepanovdev@gmail.com&subject=ВЕБ рокет у меня есть вопрос!"
      >
        <h3>nickstepanovdev@gmail.com</h3>
      </a>
    </section>
  );
};

export { Contacts };
