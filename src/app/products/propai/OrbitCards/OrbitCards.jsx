"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import carouselMiddle from "@/Assets/Images/carouselMiddle.svg";
import carouselRight from "@/Assets/Images/carouselRight.svg";
import carouselLeft from "@/Assets/Images/carouselLeft.svg";

const swapTransition = {
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
  duration: 6,
};

function SwapCard({ src, initialX, targetX, initialY, targetY }) {
  return (
    <motion.div
      className="absolute"
      initial={{ x: initialX, y: initialY }}
      animate={{ x: targetX, y: targetY }}
      transition={swapTransition}
    >
      <Image
        src={src}
        alt="swap card"
        className="w-[400px] h-[300px] object-cover shadow-2xl"
      />
    </motion.div>
  );
}

export default function OrbitCards() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)"); 
    const handle = (e) => setIsLg(e.matches);
    setIsLg(mq.matches);
    // addEventListener for modern browsers, fallback to addListener
    if (mq.addEventListener) mq.addEventListener("change", handle);
    else mq.addListener(handle);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle);
      else mq.removeListener(handle);
    };
  }, []);

  return (
    <>
      {/* Desktop: render only when isLg === true */}
      {isLg && (
        <div className="relative w-full h-[600px] lg:h-[720px] flex items-center justify-center mt-[60px] mb-[50px]  ">
          <div className="z-50">
            <Image
              src={carouselMiddle}
              alt="Center"
              className="w-[500px] h-auto shadow-2xl"
            />
          </div>

          <SwapCard
            src={carouselRight}
            initialX={500}
            targetX={-500}
            initialY={-150}
            targetY={-150}
          />

          <SwapCard
            src={carouselLeft}
            initialX={-500}
            targetX={500}
            initialY={200}
            targetY={200}
          />
        </div>
      )}

      {/* Mobile: static layout (no animation) */}
      {!isLg && (
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 mt-8 sm:mt-10 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={carouselMiddle}
              alt="center"
              className="w-full max-w-[300px] sm:max-w-[300px]"
            />
          </motion.div>
          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={carouselRight}
                alt="right"
                className="w-full max-w-[200px] sm:max-w-[200px]"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Image
                src={carouselLeft}
                alt="left"
                className="w-full max-w-[200px] sm:max-w-[200px]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
