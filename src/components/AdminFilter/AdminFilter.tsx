"use client";
import React, { useEffect, useState } from "react";

import styles from "./AdminFilter.module.scss";
import { Button } from "../Button";
import { sortFeedbacks } from "@/store/feedbackStore";

interface AdminFilterProps {
  storeIsChanged: boolean;
}

const AdminFilter: React.FC<AdminFilterProps> = ({ storeIsChanged }) => {
  const [sortByDate, setSortByDate] = useState<"newest" | "oldest">("newest");
  const [sortByActive, setSortByActive] = useState<"activeFirst" | "inactiveFirst">("activeFirst");

  useEffect(() => {
    sortFeedbacks(sortByDate, sortByActive);
  }, [sortByDate, sortByActive, storeIsChanged]);

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

  const sortFeedbacksActiveFirstHandleClick = () => {
    if (sortByActive === "inactiveFirst") {
      setSortByActive("activeFirst");
    }
  };

  const sortFeedbacksInactiveFirstHandleClick = () => {
    if (sortByActive === "activeFirst") {
      setSortByActive("inactiveFirst");
    }
  };

  return (
    <div className={styles.adminFilter}>
      <div className={styles.filterContainer}>
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
      <div className={styles.filterContainer}>
        <Button
          text="Active"
          type="button"
          onClick={sortFeedbacksActiveFirstHandleClick}
          active={sortByActive === "activeFirst"}
        />
        <Button
          text="Inactive"
          type="button"
          onClick={sortFeedbacksInactiveFirstHandleClick}
          active={sortByActive === "inactiveFirst"}
        />
      </div>
    </div>
  );
};

export { AdminFilter };
