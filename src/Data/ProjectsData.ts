import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import img1 from "../../public/images/projects_image1.jpg";
import img2 from "../../public/images/projects_image2.jpg";
import img3 from "../../public/images/projects_image3.jpg";

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
    image: img1,
    title: "Библиотека Lo-Fi музыки",
    href: "https://lioger.github.io/waves/",
    features: ["UI/UX", "Landing Page", "Design"],
  },
  {
    id: nanoid(),
    image: img2,
    title: "Nikita Stepanov",
    href: "https://nikitastepanov.vercel.app/",
    features: ["Landing Page", "Design"],
  },
  {
    id: nanoid(),
    image: img3,
    title: "Capture",
    href: "https://lioger.github.io/capture/",
    features: ["UI/UX", "Landing Page", "Design"],
  },
  {
    id: nanoid(),
    image: img1,
    title: "Библиотека Lo-Fi музыки",
    href: "https://lioger.github.io/waves/",
    features: ["UI/UX", "Landing Page", "Design"],
  },
  {
    id: nanoid(),
    image: img2,
    title: "Nikita Stepanov",
    href: "https://nikitastepanov.vercel.app/",
    features: ["Landing Page", "Design"],
  },
  {
    id: nanoid(),
    image: img3,
    title: "Capture",
    href: "https://lioger.github.io/capture/",
    features: ["UI/UX", "Landing Page", "Design"],
  },
];
