"use client";
import React from "react";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./SliderTest3.module.scss";
import { SliderAbout } from "../SliderAbout";

interface SliderTest3Props {}

const SliderTest3: React.FC<SliderTest3Props> = () => {
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
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      navigation={{
        nextEl: `.${styles.customNext}`,
        prevEl: `.${styles.customPrev}`,
      }}
      breakpoints={{
        768: {
          spaceBetween: 20,
        },
        1024: {
          spaceBetween: 30,
          // slidesPerView: 2,
        },
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={styles.sliderTest3}
    >
      {imgList.map((image, index) => (
        <SwiperSlide key={index}>
          <div className={styles.slideContainer}>
            <img src={image} alt={`Slide ${index}`} />
            {/* <SliderAbout /> */}
          </div>
        </SwiperSlide>
      ))}
      <div className={`swiper-pagination ${styles.pagination}`} />
      <div className={`swiper-button-next ${styles.customNext}`} />
      <div className={`swiper-button-prev ${styles.customPrev}`} />
    </Swiper>
  );
};

export { SliderTest3 };
