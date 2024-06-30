import React from "react";

import styles from "./ReviewCard.module.scss";
import { ReviewBubble } from "../ReviewBubble";
import { TReviewData } from "@/data/reviewData";

interface ReviewCardProps {
  review: TReviewData;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.round}>
        <ReviewBubble />
      </div>
      <p>{review.text}</p>
      <div className={styles.contacts}>
        <p className={styles.name}>{review.name}</p>
        <span className={styles.company}>{review.company}</span>
      </div>
    </div>
  );
};

export { ReviewCard };
