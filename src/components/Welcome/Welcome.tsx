import React from "react";

import { TWelcomeData } from "@/Data/WelcomeData";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import { appearAnimation, appearAnimationRight } from "../../assets/animations";

import styles from "./Welcome.module.scss";

interface WelcomeProps {
  welcomeData: TWelcomeData;
}

interface TextWithLineBreaksProps {
  text: string;
}

const Welcome: React.FC<WelcomeProps> = ({ welcomeData }) => {
  const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
    const lines = text.split("\n");
    const textWithBreaks = lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));

    return <h2>{textWithBreaks}</h2>;
  };

  return (
    <motion.div
      className={styles.welcome}
      id="welcome"
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.contentContainer}>
        <motion.div className={styles.textContainer} variants={appearAnimationRight} custom={1}>
          <TextWithLineBreaks text={welcomeData.title} />
          <p>{welcomeData.description}</p>
        </motion.div>
        <motion.a href="#feedback" variants={appearAnimation} custom={2}>
          <Button text="Оставить заявку" type="button" arrow={true} />
        </motion.a>
      </div>
      <motion.div className={styles.imageContainer} variants={appearAnimation} custom={3}>
        <Image className={styles.backgroundImg} src={welcomeData.image} alt={welcomeData.title} priority />
      </motion.div>
    </motion.div>
  );
};

export { Welcome };
