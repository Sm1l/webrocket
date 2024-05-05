"use client";
import React from "react";

import styles from "./Projects.module.scss";
import { MProjectSlider } from "../ProjectSlider";
import { motion } from "framer-motion";
import { appearAnimationRight } from "../../assets/animations";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <motion.section
      className={styles.projects}
      id="projects"
      whileInView="animate"
      initial="initial"
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.h2 className={styles.title} variants={appearAnimationRight} custom={1}>
        Наши проекты
      </motion.h2>
      <MProjectSlider variants={appearAnimationRight} custom={2} />
    </motion.section>
  );
};

export { Projects };
