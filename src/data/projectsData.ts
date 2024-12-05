import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import listsImg from "../../public/images/lists.webp";
import portfolioImg from "../../public/images/portfolio.webp";
import captureImg from "../../public/images/capture.webp";
import bazavagaImg from "../../public/images/bazavaga.webp";
import touchImg from "../../public/images/touch.png";

export type TProjectData = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  href: string;
  features: string[];
};

export const projectsData: TProjectData[] = [
  {
    id: nanoid(),
    image: touchImg,
    title: 'Touch',
    description: 'Студия дизайна',
    href: "https://sm1l.github.io/Touch/",
    features: ["Landing Page", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: listsImg,
    title: "Life-to-List",
    description: "Список дел",
    href: "https://life-to-list.vercel.app/",
    features: ["Web Application", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: portfolioImg,
    title: "Nikita Stepanov",
    description: "Портфолио",
    href: "https://nikitastepanov.vercel.app/",
    features: ["Landing Page", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: captureImg,
    title: "Capture",
    description: "Видео-продакшн",
    href: "https://lioger.github.io/capture/",
    features: ["Landing Page", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: bazavagaImg,
    title: "BazaVAGa",
    description: "Автосервис автомобилей концерна VAG",
    href: "https://bazavaga.ru",
    features: ["Landing Page", "UI/UX", "Design"],
  }
];
