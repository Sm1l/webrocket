"use client";
import React, { useEffect, useState } from "react";

import styles from "./AdminSort.module.scss";
import { Button } from "../Button";
import { sortFeedbacks } from "@/store/feedbackStore";

interface AdminSortProps {
  storeIsChanged: boolean;
}
export type TSortByDate = "newest" | "oldest";

const AdminSort: React.FC<AdminSortProps> = ({ storeIsChanged }) => {
  const [sortByDate, setSortByDate] = useState<TSortByDate>("newest");

  useEffect(() => {
    sortFeedbacks(sortByDate);
  }, [sortByDate, storeIsChanged]);

  const sortFeedbacksByDateHandleClick = (sortBy: TSortByDate) => {
    if (sortByDate !== sortBy) {
      setSortByDate(sortBy);
    }
  };

  return (
    <div className={styles.adminSort}>
      <Button
        text="Newest"
        type="button"
        onClick={() => sortFeedbacksByDateHandleClick("newest")}
        active={sortByDate === "newest"}
      />
      <Button
        text="Oldest"
        type="button"
        onClick={() => sortFeedbacksByDateHandleClick("oldest")}
        active={sortByDate === "oldest"}
      />
    </div>
  );
};

export { AdminSort };
