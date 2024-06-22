import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TFirebaseData } from "@/firebase/getDataFromFirebase";
import { TFilterBy } from "@/components/AdminFilter";
import { TSortByDate } from "@/components/AdminSort";

type TFeedbackState = {
  feedbacks: TFirebaseData[] | [];
  filteredFeedbacks: TFirebaseData[] | [];
};

const initialFeedbackValue: TFeedbackState = { feedbacks: [], filteredFeedbacks: [] };

export const useFeedbackStore = create<typeof initialFeedbackValue>()(
  devtools(() => initialFeedbackValue, { name: "Feedbacks" })
);

export const getFeedbacksInStore = (feedbacks: TFirebaseData[]) => {
  useFeedbackStore.setState({ feedbacks: feedbacks });
};

export const deleteFeedbackFromStore = (id: string) => {
  useFeedbackStore.setState((prevState) => ({
    feedbacks: prevState.feedbacks.filter((feedback) => feedback.id !== id),
  }));
};

export const toggleActiveStatusInState = (id: string) => {
  const currentFeedbacks = useFeedbackStore.getState().feedbacks;
  const index = currentFeedbacks.findIndex((feedback) => feedback.id === id);

  if (index !== -1) {
    const newFeedbacks = currentFeedbacks.map((feedback, i) => {
      if (i === index) {
        console.log(`Feedback with id ${id} updated successfully in storage`);
        return { ...feedback, active: !feedback.active };
      }
      return feedback;
    });

    useFeedbackStore.setState({ feedbacks: newFeedbacks });
  }
};
export const filterFeedbacks = (filter: TFilterBy) => {
  useFeedbackStore.setState((prevState) => {
    let feedbacks = [...prevState.feedbacks];
    let filteredFeedbacks: TFirebaseData[] = feedbacks;

    switch (filter) {
      case "active":
        filteredFeedbacks = filteredFeedbacks.filter((feedback) => feedback.active);
        break;
      case "inactive":
        filteredFeedbacks = filteredFeedbacks.filter((feedback) => !feedback.active);
        break;
      case "all":
      default:
        break;
    }

    return { ...prevState, filteredFeedbacks: filteredFeedbacks };
  });
};

export const sortFeedbacks = (dateOrder: TSortByDate) => {
  useFeedbackStore.setState((prev) => {
    let sortedFeedbacks = [...prev.feedbacks];

    if (dateOrder === "newest") {
      sortedFeedbacks.sort((a, b) => b.date - a.date);
    } else {
      sortedFeedbacks.sort((a, b) => a.date - b.date);
    }
    return { ...prev, feedbacks: sortedFeedbacks };
  });
};
