import { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "ВЕБ рокет | Вопросы",
};

export default function Questions() {
  return (
    <div className={styles.questions}>
      <h2 className={styles.title}>Вопросы</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic
        temporibus itaque animi odit consequatur, officia porro fugit dolore
        dolorem ut a reiciendis, dicta aperiam voluptatem quasi obcaecati!
        Veritatis, quos? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nemo hic temporibus itaque animi odit consequatur, officia porro
        fugit dolore dolorem ut a reiciendis, dicta aperiam voluptatem quasi
        obcaecati! Veritatis, quos? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nemo hic temporibus itaque animi odit consequatur,
        officia porro fugit dolore dolorem ut a reiciendis, dicta aperiam
        voluptatem quasi obcaecati! Veritatis, quos? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nemo hic temporibus itaque animi odit
        consequatur, officia porro fugit dolore dolorem ut a reiciendis, dicta
        aperiam voluptatem quasi obcaecati! Veritatis, quos? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Nemo hic temporibus itaque animi
        odit consequatur, officia porro fugit dolore dolorem ut a reiciendis,
        dicta aperiam voluptatem quasi obcaecati! Veritatis, quos?
      </p>
    </div>
  );
}
