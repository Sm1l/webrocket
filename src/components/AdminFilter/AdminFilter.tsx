import React, { useState, useEffect } from "react";

import styles from "./AdminFilter.module.scss";
import { Button } from "../Button";
import { filterFeedbacks, useFeedbackStore } from "@/store/feedbackStore";

interface AdminFilterProps {}
export type TFilterBy = "all" | "active" | "inactive";

const AdminFilter: React.FC<AdminFilterProps> = () => {
  const [filterBy, setFilterBy] = useState<TFilterBy>("all");
  const feedbacks = useFeedbackStore((state) => state.feedbacks);

  const filterByAllHandleClick = () => {
    if (filterBy !== "all") {
      setFilterBy("all");
    }
  };

  const filterByActiveHandleClick = () => {
    if (filterBy !== "active") {
      setFilterBy("active");
    }
  };

  const filterByInactiveHandleClick = () => {
    if (filterBy !== "inactive") {
      setFilterBy("inactive");
    }
  };

  useEffect(() => {
    filterFeedbacks(filterBy);
  }, [filterBy, feedbacks]);

  return (
    <div className={styles.adminFilter}>
      <Button text="all" type="button" active={filterBy === "all"} onClick={filterByAllHandleClick} />
      <Button text="active" type="button" active={filterBy === "active"} onClick={filterByActiveHandleClick} />
      <Button text="inactive" type="button" active={filterBy === "inactive"} onClick={filterByInactiveHandleClick} />
    </div>
  );
};

export { AdminFilter };
