import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import img1 from "../../public/images/figure1.png";
import img2 from "../../public/images/figure2.png";
import img3 from "../../public/images/figure3.png";

export type TWelcomeBullet = {
  bTitle: string;
  bDescription: string;
  bPrice: number;
};

export type TWelcomeData = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  bullet: TWelcomeBullet;
};

export const welcomeData: TWelcomeData[] = [
  {
    id: nanoid(),
    title: "Разработка сайтов\n Outsourse\n Outstaff",
    description:
      "Предоставляем широкий спектр услуг, включая создание и дизайн сайтов,  контент-маркетинг, контекстную рекламу и другое Обеспечим эффективную работу сайта и индивидуальный подход к каждому заказу",
    image: img1,
    bullet: {
      bTitle: "Сайты",
      bDescription: "бэкенд и фронтенд",
      bPrice: 1500,
    },
  },
  {
    id: nanoid(),
    title: "Дизайн",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: img3,
    bullet: {
      bTitle: "Дизайн",
      bDescription: "UX стратегия, UI дизайн интерфейсов, мандмэппинг",
      bPrice: 1500,
    },
  },
];
