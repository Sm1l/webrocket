import { nanoid } from "nanoid";

export type TReviewData = {
  id: string;
  name: string;
  text: string;
  company: string;
};

export const reviewData: TReviewData[] = [
  {
    id: nanoid(),
    name: "Nikita Stepanov",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum aliquid architecto cumque qui quas voluptatibus culpa alias ullam, est icta",
    company: "WebRocket",
  },
  {
    id: nanoid(),
    name: "Kostya",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium repellat minus eius. Et distinctio quamomnis beatae fugiat explicabo voluptates facere, temporibus similique expedita repudiandae eveniet molestias velit. Consequatur, accusantium? Perspiciatis nesciunt adipisci, illum quam mollitia tempore facilis minus nulla animi laudantium!",
    company: "WebRocket",
  },
  {
    id: nanoid(),
    name: "Chupakabra",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, reprehenderit pa, excepturi nihil veritatis. Aperi natus dolorem libero cupiditate animi a accusamus, maiores delectus et qui perferendi",
    company: "Chupakabra&Co",
  },
  {
    id: nanoid(),
    name: "Zeliboba",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, reprehenderit pa, excepturi nihil veritatis. Aperi natus dolorem libero cupiditate animi a accusamus, maiores delectus et qui perferendi Lorem ipsum dolor sit amet consectetur, adipisicing el",
    company: "ZelibobaForever",
  },
];
