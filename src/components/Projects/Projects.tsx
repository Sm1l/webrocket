import React from "react";

import styles from "./Projects.module.scss";
import { ProjectsSlider } from "../ProjectsSlider/ProjectsSlider";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Наши проекты</h2>
      <ProjectsSlider />
    </div>
  );
};

export { Projects };
