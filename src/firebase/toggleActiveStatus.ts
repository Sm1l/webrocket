import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { TFirebaseData } from "./getDataFromFirebase";

export const toggleActiveStatus = async (feedbackId: string): Promise<void> => {
  try {
    const docRef = doc(db, "WebRocket", "feedbacks");
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const feedbacksData = docSnapshot.data() as Record<string, TFirebaseData>;

      if (feedbacksData[feedbackId]) {
        const updatedFeedback = {
          ...feedbacksData[feedbackId],
          active: !feedbacksData[feedbackId].active,
        };

        await updateDoc(docRef, {
          [feedbackId]: updatedFeedback,
        });

        console.log(`Feedback with id ${feedbackId} updated successfully`);
      } else {
        console.error(`Feedback with id ${feedbackId} not found`);
      }
    } else {
      console.error("No such document!");
    }
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};
