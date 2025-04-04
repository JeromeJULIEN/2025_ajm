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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
