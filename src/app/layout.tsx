import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import DesktopMenu from "@/components/menu/DesktopMenu";
import MobileMenu from "@/components/menu/MobileMenu";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club Léo Lagrange multi-activités à Endoume, Marseille",
  description:
    "Venez découvrir un club multi-activités familial à Endoume, Marseille : AJM Judo et Jujitsu, Yoga, Qi Gong, Gym, Poterie",
  openGraph: {
    title: "Club Léo Lagrange multi-activités à Endoume, Marseille",
    description:
      "Venez découvrir un club multi-activités familial à Endoume, Marseille : AJM Judo et Jujitsu, Yoga, Qi Gong, Gym, Poterie",
    url: "https://www.leolagrangeendoume.fr",
    siteName: "Club Léo Lagrange Endoume",
    images: [
      {
        url: "/images/open-graph.jpg",
        width: 1200,
        height: 691,
        alt: "Club Léo Endoume, Marseille",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Club Léo Lagrange multi-activités à Endoume, Marseille</title>
        <meta
          name="description"
          content="Venez découvrir un club multi-activités familial à Endoume, Marseille : AJM Judo et Jujitsu, Yoga, Qi Gong, Gym, Poterie"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.leolagrangeendoume.fr" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Club Léo Lagrange multi-activités à Endoume, Marseille"
        />
        <meta
          property="og:description"
          content="Venez découvrir un club multi-activités familial à Endoume, Marseille : AJM Judo et Jujitsu, Yoga, Qi Gong, Gym, Poterie"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="leolagrangeendoume.fr" />
        <meta
          property="twitter:url"
          content="https://www.leolagrangeendoume.fr"
        />
        <meta
          name="twitter:title"
          content="Club Léo Lagrange multi-activités à Endoume, Marseille"
        />
        <meta
          name="twitter:description"
          content="Venez découvrir un club multi-activités familial à Endoume, Marseille : AJM Judo et Jujitsu, Yoga, Qi Gong, Gym, Poterie"
        />
        <meta name="twitter:image" content="" />
      </head>
      <body className={` ${montserrat.className} antialiased`}>
        <div className="flex flex-col justify-start min-h-screen bg-maincolor text-textColor-main ">
          <div className="hidden lg:block">
            <DesktopMenu />
          </div>
          <div className="block lg:hidden">
            <MobileMenu />
          </div>

          <main className="flex-grow ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
