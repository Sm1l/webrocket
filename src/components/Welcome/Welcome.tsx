import React from "react";

import { TWelcomeData } from "@/data/welcomeData";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button";
import { appearAnimation, appearAnimationRight } from "@/assets/animations";
import { TextWithLineBreaks } from "../../helpers/TextWithLineBreaks";

import styles from "./Welcome.module.scss";

interface WelcomeProps {
  welcomeData: TWelcomeData;
}

const Welcome: React.FC<WelcomeProps> = ({ welcomeData }) => {
  return (
    <motion.div
      className={styles.welcome}
      id="welcome"
      initial="initial"
      whileInView="animate"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <motion.h2 variants={appearAnimationRight} custom={2}>
            <TextWithLineBreaks text={welcomeData.title} />
          </motion.h2>
          <motion.p variants={appearAnimationRight} custom={3}>
            {welcomeData.description}
          </motion.p>
        </div>
        <motion.a href="#feedback" variants={appearAnimation} custom={4}>
          <Button text="Оставить заявку" type="button" arrow={true} />
        </motion.a>
      </div>
      <motion.div className={styles.imageContainer} variants={appearAnimation} custom={5}>
        <Image className={styles.backgroundImg} src={welcomeData.image} alt={welcomeData.title} priority />
      </motion.div>
    </motion.div>
  );
};

export { Welcome };
