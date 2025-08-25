"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { TypewriterEffectSmooth, TypewriterWord } from "../ui/typewriter-effect";

export function HeroSection() {
  const images = [
    "/images/cocoaPlantation.jpg",
    "/images/plantation.jpeg",
    "/images/cocoaSeeds.jpg",
    "/images/sesameSeeds.jpg",
  ];
  const words: TypewriterWord[] = [
    { text: "Premium Agricultural Exports" },
    { text: "for Global Markets", className: "text-emerald-400" },
  ];

  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <TypewriterEffectSmooth words={words} className="text-neutral-50" />
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore Our Products →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
