"use client";
import Link from "next/link";
import { useState } from "react";

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/images/judo.jpg",
      title: "Judo",
      href: "/judo",
    },
    {
      src: "/images/yoga.webp",
      title: "Yoga",
      href: "/yoga",
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

          <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
            {image.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
