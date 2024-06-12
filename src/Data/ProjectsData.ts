import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import listsImg from "../../public/images/lists.webp";
import lofiImg from "../../public/images/projects_image1.jpg";
import portfolioImg from "../../public/images/portfolio.webp";
import captureImg from "../../public/images/capture.webp";

export type TProjectData = {
  id: string;
  image: StaticImageData;
  title: string;
  href: string;
  features: string[];
};

export const projectsData: TProjectData[] = [
  {
    id: nanoid(),
    image: listsImg,
    title: "Life-to-List",
    href: "https://life-to-list.vercel.app/",
    features: ["Web Application", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: lofiImg,
    title: "Библиотека Lo-Fi музыки",
    href: "https://lioger.github.io/waves/",
    features: ["Web Application", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: captureImg,
    title: "Capture",
    href: "https://lioger.github.io/capture/",
    features: ["Landing Page", "UI/UX", "Design"],
  },
  {
    id: nanoid(),
    image: portfolioImg,
    title: "Nikita Stepanov",
    href: "https://nikitastepanov.vercel.app/",
    features: ["Landing Page", "UI/UX", "Design"],
  },
];
