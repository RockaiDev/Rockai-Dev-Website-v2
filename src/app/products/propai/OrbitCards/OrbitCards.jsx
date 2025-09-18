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
        className="w-[550px] h-[400px] object-cover shadow-2xl"
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
              className="w-[550px] h-auto "
            />
          </div>

          <SwapCard
            src={carouselRight}
            initialX={500}
            targetX={-500}
            initialY={-150}
            targetY={150}
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
        <div className="flex flex-col items-center justify-center gap-6 mt-10 sm:hidden">
          <div>
            <Image
              src={carouselMiddle}
              alt="center"
              className=" px-4"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Image
                src={carouselRight}
                alt="right"
                className=""
              />
            </div>
            <div>
              <Image
                src={carouselLeft}
                alt="left"
                className=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
