"use client";
import { useState, useEffect } from "react";

export default function VideoHomepage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const words = [
    "L'amitié",
    "Le courage",
    "La sincérité",
    "L'honneur",
    "La modestie",
    "Le respect",
    "Le contrôle de soie",
    "La politesse",
  ]; // Personnalisez ces mots selon vos besoins

  useEffect(() => {
    const interval = setInterval(() => {
      // Déclenche la disparition
      setIsVisible(false);

      // Attend 1 seconde pour la disparition, puis change le mot et le fait réapparaître
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/test.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`text-white text-center text-5xl md:text-7xl font-bold transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {words[currentWordIndex]}
        </h1>
      </div>
    </div>
  );
}
