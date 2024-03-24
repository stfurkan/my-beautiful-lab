"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
 
export function HeroImage() {
  const heroImagePath = "/images/hero/"

  const images = [
    `${heroImagePath}hero1.jpeg`,
    `${heroImagePath}hero2.jpeg`,
    `${heroImagePath}hero3.jpeg`,
  ];
  return (
    <ImagesSlider className="h-[20rem] rounded-2xl" images={images}>
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
          My Beautiful Lab
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
