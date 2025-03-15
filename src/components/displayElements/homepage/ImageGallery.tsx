"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      src: "/images/judo.jpg",
      title: "Judo / Jujitsu",
      href: "/judo",
    },
    {
      src: "/images/yogaPage.jpg",
      title: "Yoga",
      href: "/yoga",
    },
    {
      src: "/images/qigong.jpg",
      title: "Qi Gong",
      href: "/qigong",
    },
    {
      src: "/images/gym.jpg",
      title: "Gym",
      href: "/gym",
    },
    {
      src: "/images/poterie.jpg",
      title: "Poterie",
      href: "/poterie",
    },
  ];

  useEffect(() => {
    // Vérifier si on est sur mobile (largeur < 768px)
    const checkMobile = () => {
      const isMobileCheck = window.innerWidth < 768;
      setIsMobile(isMobileCheck);
      // Initialiser l'index à 1 si on est sur mobile
      if (isMobileCheck) {
        setHoveredIndex(0);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Défilement automatique uniquement sur mobile
    if (isMobile) {
      const interval = setInterval(() => {
        setHoveredIndex((current) => {
          if (current === null) return 0;
          return current === images.length - 1 ? 0 : current + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="w-full flex transition-all duration-500 ease-in-out gap-2">
      {images.map((image, index) => (
        <Link
          key={index}
          href={image.href}
          className={`relative transition-all duration-500 ease-in-out ${
            hoveredIndex === index
              ? "w-3/4"
              : hoveredIndex !== null
              ? "w-[8.33%]"
              : "w-1/4"
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-[500px] object-cover"
          />

          {(!isMobile || (isMobile && hoveredIndex === index)) && (
            <div className="absolute inset-0 flex items-center text-center justify-center text-white text-3xl font-bold">
              {image.title.toUpperCase()}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
