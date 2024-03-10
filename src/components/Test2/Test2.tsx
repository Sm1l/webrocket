"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Test2.module.scss";
import "./swiperSlider.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { SliderAbout } from "../SliderAbout";

// import "./styles.css";

interface Test2Props {}

const Test2: React.FC<Test2Props> = () => {
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
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={10}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      navigation={{
        prevEl: `.${styles.customPrev}`,
        nextEl: `.${styles.customNext}`,
        disabledClass: `${styles.disabled}`,
      }}
      breakpoints={{
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
        },
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={styles.mySwiper}
    >
      {imgList.map((img, index) => (
        <SwiperSlide key={`${img} ${index}`}>
          <div className={styles.sliderContainer}>
            <img src={img} />
            <div>{/* <p>hello</p> */}</div>
            {/* <SliderAbout /> */}
          </div>
        </SwiperSlide>
      ))}
      <div className={styles.customPrev}></div>
      <div className={styles.customNext}></div>
    </Swiper>
  );
};

export { Test2 };
