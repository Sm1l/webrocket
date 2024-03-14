import React from "react";

import Image from "next/image";
import { Button } from "../Button";
import { TWelcomeData } from "@/Data/WelcomeData";

import styles from "./Welcome.module.scss";

interface WelcomeProps {
  welcomeData: TWelcomeData;
}

interface TextWithLineBreaksProps {
  text: string;
}

const Welcome: React.FC<WelcomeProps> = ({ welcomeData }) => {
  const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
    const textWithBreaks = text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));

    return <h2>{textWithBreaks}</h2>;
  };

  return (
    <div className={styles.welcome} id="welcome">
      <div className={styles.contentContainer}>
        <TextWithLineBreaks text={welcomeData.title} />
        <p>{welcomeData.description}</p>
        <a href="#feedback">
          <Button text="Оставить заявку" type="button" arrow={true} />
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.backgroundImg}
          src={welcomeData.image}
          alt={welcomeData.title}
          priority
        />
      </div>
    </div>
  );
};

export { Welcome };
