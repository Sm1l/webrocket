import { nanoid } from "nanoid";

type TSetBubbles = {
  setBubbles: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
};

export const generateBubbles = (setBubbles: TSetBubbles["setBubbles"]) => {
  const bubbleId = nanoid();
  setBubbles((prev) => ({ ...prev, [bubbleId]: true }));

  setTimeout(() => {
    setBubbles((prev) => {
      const newBubbles = { ...prev };
      delete newBubbles[bubbleId];
      return newBubbles;
    });
  }, 6000);
};
