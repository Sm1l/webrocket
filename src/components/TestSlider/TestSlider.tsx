"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import { SliderAbout } from "../SliderAbout";
import styles from "./TestSlider.module.scss";
import "./swiperSlider.scss";

interface TestSliderProps {}

const TestSlider: React.FC<TestSliderProps> = () => {
  const imgList: string[] = [
    "/images/projects_image1.jpg",
    "/images/projects_image2.jpg",
    "/images/projects_image3.jpg",
    "/images/projects_image1.jpg",
    "/images/projects_image2.jpg",
    "/images/projects_image3.jpg",
  ];
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#b061ff",
        "--swiper-pagination-color": "#b061ff",
      }}
      // observer={true}
      // observeParents={true}
      // resizeObserver={true}
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slideToClickedSlide={true}
      slidesPerView={1}
      spaceBetween={10}
      // loop={true} //*больше слайдов
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      // pagination={{
      //   el: ".swiper-pagination",
      //   type: "bullets",
      // }}
      navigation={{
        prevEl: `.${styles.customPrev}`,
        nextEl: `.${styles.customNext}`,
        disabledClass: `${styles.disabled}`,
      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          pagination: false,
          navigation: true,
        },
        1024: {
          slidesPerView: 1.4,
          spaceBetween: 30,
          pagination: false,
        },
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={styles.testSlider}
    >
      {imgList.map((img, index) => (
        <SwiperSlide key={`${img} ${index}`}>
          <div className={styles.sliderContainer}>
            <img src={img} />
            <SliderAbout />
          </div>
        </SwiperSlide>
      ))}
      <div className={styles.customPrev}></div>
      <div className={styles.customNext}></div>
    </Swiper>
  );
};

export { TestSlider };
