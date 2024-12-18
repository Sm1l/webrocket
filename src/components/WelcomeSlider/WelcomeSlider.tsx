"use client";
import React, { useState } from "react";
import type { Swiper as TSwiper } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";

import { Welcome } from "../Welcome/Welcome";
import { WelcomeBullet } from "../WelcomeBullet";
import styles from "./WelcomeSlider.module.scss";

import { welcomeData } from "@/data/welcomeData";
import "./swiper.scss";

interface WelcomeSliderProps {}

const WelcomeSlider: React.FC<WelcomeSliderProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

  return (
    <section className={styles.welcomeSlider} id="welcome">
      <Swiper speed={600} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Thumbs]} className="welcomeMainSlider">
        {welcomeData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Welcome welcomeData={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={2.6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        breakpoints={{
          240: { slidesPerView: 2 },
        }}
        className="welcomeButtonsSlider"
      >
        {welcomeData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <WelcomeBullet bulletsWelcomeData={slide.bullet} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export { WelcomeSlider };
