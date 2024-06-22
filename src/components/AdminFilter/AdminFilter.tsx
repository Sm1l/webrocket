import React, { useState, useEffect } from "react";

import styles from "./AdminFilter.module.scss";
import { Button } from "../Button";
import { filterFeedbacks, useFeedbackStore } from "@/store/feedbackStore";

interface AdminFilterProps {}
export type TFilterBy = "all" | "active" | "inactive";

const AdminFilter: React.FC<AdminFilterProps> = () => {
  const [filterBy, setFilterBy] = useState<TFilterBy>("all");
  const feedbacks = useFeedbackStore((state) => state.feedbacks);

  const filterByHandleClick = (filter: TFilterBy) => {
    if (filterBy !== filter) {
      setFilterBy(filter);
    }
  };

  useEffect(() => {
    filterFeedbacks(filterBy);
  }, [filterBy, feedbacks]);

  return (
    <div className={styles.adminFilter}>
      <Button text="all" type="button" active={filterBy === "all"} onClick={() => filterByHandleClick("all")} />
      <Button
        text="active"
        type="button"
        active={filterBy === "active"}
        onClick={() => filterByHandleClick("active")}
      />
      <Button
        text="inactive"
        type="button"
        active={filterBy === "inactive"}
        onClick={() => filterByHandleClick("inactive")}
      />
    </div>
  );
};

export { AdminFilter };
