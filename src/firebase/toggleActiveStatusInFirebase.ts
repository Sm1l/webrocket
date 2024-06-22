import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { TFirebaseData } from "./getDataFromFirebase";

export const toggleActiveStatusInFirebase = async (feedbackId: string): Promise<void> => {
  try {
    const docRef = doc(db, "webrocket_feedbacks", feedbackId);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      console.error(`Feedback with id ${feedbackId} not found`);
      throw new Error(`Feedback with id ${feedbackId} not found`);
    }

    const feedbacksData = docSnapshot.data() as TFirebaseData;
    console.log("toggle Firebase");

    await updateDoc(docRef, {
      active: !feedbacksData.active,
    });

    console.log(`Feedback with id ${feedbackId} updated successfully`);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};
