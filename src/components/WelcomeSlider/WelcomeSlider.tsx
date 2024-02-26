"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import Swiper from "swiper";
import "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import "./swiper.scss";
import styles from "./WelcomeSlider.module.scss";
import { SliderAbout } from "../SliderAbout";

interface WelcomeSliderProps {}

const WelcomeSlider: React.FC<WelcomeSliderProps> = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  const imgList: string[] = [
    "/images/projects_image1.jpg",
    "/images/projects_image2.jpg",
    "/images/projects_image3.jpg",
  ];

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
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
        },
      });

      return () => {
        swiper?.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.welcomeSlider}>
      <div className={styles.slider}>
        <div
          className="swiper swiper-container sliderContainer"
          ref={swiperRef}
        >
          <div className="swiper-wrapper">
            {imgList.map((item, index) => (
              <div key={index} className="swiper-slide">
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    src={item}
                    alt={`Image ${index}`}
                    width={600}
                    height={300}
                  />
                  {/* //!map */}
                  <SliderAbout />
                </div>
              </div>
            ))}
          </div>
          <div
            ref={nextButtonRef}
            className="swiper-button-next sliderNextButton"
          ></div>
          <div
            ref={prevButtonRef}
            className="swiper-button-prev sliderPrevButton"
          ></div>
        </div>
      </div>
      <div
        className="swiper-pagination paginationContainer"
        ref={paginationRef}
      ></div>
    </div>
  );
};

export { WelcomeSlider };
