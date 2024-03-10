"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Swiper from "swiper";
import "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import "./swiper.scss";
import styles from "./ProjectsSlider.module.scss";
import { ProjectsAbout } from "../ProjectsAbout";
import { projectsData } from "@/Data/ProjectsData";

interface ProjectsSliderProps {}

const ProjectsSlider: React.FC<ProjectsSliderProps> = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        speed: 600,
        navigation: {
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        },
        pagination: {
          el: paginationRef.current,
          clickable: true,
          renderBullet: function (_, className) {
            return `<span class="${className}"></span>`;
          },
        },
        effect: "coverflow",
        slideToClickedSlide: true,
        coverflowEffect: {
          slideShadows: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 1.1,
            spaceBetween: 10,
            centeredSlides: false,
            pagination: false,
          },
          1024: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: false,
          },
        },
      });

      return () => {
        swiper?.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.projectsSlider}>
      <div className={styles.slider}>
        <div className="swiper swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {projectsData.map((project) => (
              <div key={project.id} className="swiper-slide">
                <div className={styles.slideContainer}>
                  <img
                    className={styles.img}
                    src={project.image}
                    alt={`image ${project.id}`}
                  />
                  {/* <Image
                    className={styles.img}
                    src={item}
                    alt={`Image ${index}`}
                    layout="fill"
                    objectFit="cover"
                  /> */}
                  <ProjectsAbout projectData={project} />
                </div>
              </div>
            ))}
          </div>
          <div ref={prevButtonRef} className="swiper-button-prev "></div>
          <div ref={nextButtonRef} className="swiper-button-next "></div>
        </div>
      </div>
      <div className={styles.paginationContainer} ref={paginationRef}></div>
    </div>
  );
};

export { ProjectsSlider };
