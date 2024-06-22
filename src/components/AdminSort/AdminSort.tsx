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

  const sortFeedbacksNewestFirstHandleClick = () => {
    if (sortByDate === "oldest") {
      setSortByDate("newest");
    }
  };

  const sortFeedbacksOldestFirstHandleClick = () => {
    if (sortByDate === "newest") {
      setSortByDate("oldest");
    }
  };

  return (
    <div className={styles.adminSort}>
      <Button
        text="Newest"
        type="button"
        onClick={sortFeedbacksNewestFirstHandleClick}
        active={sortByDate === "newest"}
      />
      <Button
        text="Oldest"
        type="button"
        onClick={sortFeedbacksOldestFirstHandleClick}
        active={sortByDate === "oldest"}
      />
    </div>
  );
};

export { AdminSort };
