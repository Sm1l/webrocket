import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.scss";
import "../assets/variables.scss";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Gilroy-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy-Semibold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mySite.com"), //!изменить
  title: "ВЕБ рокет",
  description: "Разработка сайтов, Outsourse, Outstaff",
  keywords: "разработка сайтов, купить сайт, outsourse, outstaff",
  openGraph: {
    title: "ВЕБ рокет",
    description: "Разработка сайтов, Outsourse, Outstaff",
    url: "https://mySite.com", //!изменить
    images: "/og-image.jpg", //!изменить
  },
  //!добавить метаданные
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicon/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="./favicon/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="./favicon/safari-pinned-tab.svg"
          color="#b061ff"
        ></link>
        <meta name="msapplication-TileColor" content="#d3a7ff"></meta>
        <meta name="theme-color" content="#d3a7ff"></meta>
      </head>
      <body className={`${gilroy.className}`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
