import React from "react";

import styles from "./ProjectsAbout.module.scss";
import { TProjectData } from "@/Data/ProjectsData";

interface ProjectsAboutProps {
  projectData: TProjectData;
}

const ProjectsAbout: React.FC<ProjectsAboutProps> = ({ projectData }) => {
  return (
    <div className={styles.projectsAbout} key={projectData.id}>
      <div className={styles.textContainer}>
        <h3>{projectData.title}</h3>
        <a className={styles.link} href={projectData.href} target="_blank">
          {projectData.href}
        </a>
      </div>
      <div className={styles.featuresContainer}>
        {projectData.features.map((feature) => (
          <div className={styles.feature} key={`${projectData.id} ${feature}`}>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProjectsAbout };
