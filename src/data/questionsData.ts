import { nanoid } from "nanoid";

export type TQuestionsData = {
  id: string;
  question: string;
  answer: string;
};

export const questionsData: TQuestionsData[] = [
  {
    id: nanoid(),
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum aliquid architecto cumque qui quas voluptatibus culpa alias ullam, est icta",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil    eveniet expedita quidem atque illo nam? Corporis delectus voluptas    reprehenderit quas, adipisci aspernatur dolores odit rem dolore    accusamus quisquam perspiciatis esse. Repudiandae ea nulla modi    veritatis rem quas similique delectus accusantium earum laudantium    placeat ipsa dignissimos id inventore sequi, et quo velit sunt    maxime enim rerum. Ut ratione provident velit ipsam? Autem, tenetur    velit eum vel voluptate quas, eveniet doloribus fugit dicta harum    rem enim facilis ipsa eius! Nobis esse similique, nemo ipsum beatae,    eveniet",
  },
  {
    id: nanoid(),
    question: "Nikita Stepanov",
    answer: "https://nikitastepanov.vercel.app/",
  },
  {
    id: nanoid(),
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil    eveniet expedita quidem atque illo nam? Corporis delectus voluptas ",
  },
  {
    id: nanoid(),
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum aliquid architecto cumque qui quas voluptatibus c Stepanov",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum aliquid architecto cumque qui quas voluptatibus c://nikitastepanov.vercel.app/",
  },
  {
    id: nanoid(),
    question:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil    eveniet expedita quidem atque illo nam? Corporis delectus voluptas    reprehenderit quas, adipisci aspernatur dolores odit rem dolore    accusamus quisquam perspiciatis esse. Repudiandae ea nulla modi    veritatis rem quas similique delectus accusantium earum laudantium    placeat ipsa dignissimos id inventore sequi, et quo velit sunt    maxime enim rerum. Ut ratione provident velit ipsam? Autem, tenetur    velit eum vel voluptate quas, eveniet doloribus fugit dicta harum    rem enim facilis ipsa eius! Nobis esse similique, nemo ipsum beatae,    eveniet",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil    eveniet expedita quidem atque illo nam? Corporis delectus voluptas    reprehenderit quas, adipisci aspernatur dolores odit rem dolore    accusamus quisquam perspiciatis esse. Repudiandae ea nulla modi    veritatis rem quas similique delectus accusantium earum laudantium    placeat ipsa dignissimos id inventore sequi, et quo velit sunt    maxime enim rerum. Ut ratione provident velit ipsam? Autem, tenetur    velit eum vel voluptate quas, eveniet doloribus fugit dicta harum    rem enim facilis ipsa eius! Nobis esse similique, nemo ipsum beatae,    eveniet",
  },
];
