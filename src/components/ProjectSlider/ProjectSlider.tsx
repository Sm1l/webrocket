"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectsData } from "@/Data/ProjectsData";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import styles from "./ProjectSlider.module.scss";

import "./swiper.scss";
import { ProjectsAbout } from "../ProjectsAbout";

interface ProjectSliderProps {}

const ProjectSlider = forwardRef<HTMLDivElement, ProjectSliderProps>((_, ref) => {
  return (
    <div className={styles.projectSlider} ref={ref}>
      <Swiper
        speed={600}
        effect={"coverflow"}
        centeredSlides={false}
        modules={[Navigation, Pagination, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        slidesPerView={1.15}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            pagination: false,
          },
          1024: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: false,
          },
        }}
        className="projectSwiper"
      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.slideContainer}>
              <Image className={styles.img} src={project.image} alt={project.title} />
              <ProjectsAbout projectData={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
ProjectSlider.displayName = "ProjectSlider";
export { ProjectSlider };

export const MProjectSlider = motion(ProjectSlider);
