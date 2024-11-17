"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Mousewheel } from "swiper/modules";


import { reviewData } from "@/data/reviewData";
import { ReviewCard } from "../ReviewCard";
import styles from "./ReviewSlider.module.scss";

interface ReviewSliderProps {}

const ReviewSlider: React.FC<ReviewSliderProps> = () => {
  return (
    <div className={styles.reviewSlider}>
      <Swiper
        speed={600}

        mousewheel={true}
        modules={[FreeMode, Mousewheel]}

        slidesPerView={1.1}
        watchSlidesProgress={true}
        breakpoints={{
          440: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.4 },
        }}
        className="reviewMainSlider"
      >
        {reviewData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <ReviewCard review={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { ReviewSlider };
