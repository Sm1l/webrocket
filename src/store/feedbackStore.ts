import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TFirebaseData } from "@/firebase/getDataFromFirebase";

type TFeedbackState = {
  feedbacks: TFirebaseData[] | [];
};

const initialFeedbackValue: TFeedbackState = { feedbacks: [] };

export const useFeedbackStore = create<typeof initialFeedbackValue>()(
  devtools(() => initialFeedbackValue, { name: "Feedbacks" })
);

export const getFeedbacksFromFirebase = (feedbacks: TFirebaseData[]) => {
  useFeedbackStore.setState({ feedbacks: feedbacks });
};

export const sortFeedbacks = (dateOrder: "newest" | "oldest", activeOrder: "activeFirst" | "inactiveFirst") => {
  useFeedbackStore.setState((prev) => {
    let sortedFeedbacks = [...prev.feedbacks];

    if (dateOrder === "newest") {
      sortedFeedbacks.sort((a, b) => b.date - a.date);
    } else {
      sortedFeedbacks.sort((a, b) => a.date - b.date);
    }
    if (activeOrder === "activeFirst") {
      sortedFeedbacks.sort((a, b) => Number(b.active) - Number(a.active));
    } else {
      sortedFeedbacks.sort((a, b) => Number(a.active) - Number(b.active));
    }

    return { ...prev, feedbacks: sortedFeedbacks };
  });
};

// export const sortFeedbacksNewestFirst = () => {
//   const feedbacks = useFeedbackStore.getState().feedbacks;
//   const sortedFeedbacks = feedbacks.toSorted((a, b) => b.date - a.date);
//   useFeedbackStore.setState({ feedbacks: sortedFeedbacks });
// };

// export const sortFeedbacksOldestFirst = () => {
//   const feedbacks = useFeedbackStore.getState().feedbacks;
//   const sortedFeedbacks = feedbacks.toSorted((a, b) => a.date - b.date);
//   useFeedbackStore.setState({ feedbacks: sortedFeedbacks });
// };

// export const sortFeedbacksActiveFirst = () => {
//   const feedbacks = useFeedbackStore.getState().feedbacks;
//   const sortedFeedbacks = feedbacks.toSorted((a, b) => Number(b.active) - Number(a.active));
//   useFeedbackStore.setState({ feedbacks: sortedFeedbacks });
// };

// export const sortFeedbacksInactiveFirst = () => {
//   const feedbacks = useFeedbackStore.getState().feedbacks;
//   const sortedFeedbacks = feedbacks.toSorted((a, b) => Number(a.active) - Number(b.active));
//   useFeedbackStore.setState({ feedbacks: sortedFeedbacks });
// };
