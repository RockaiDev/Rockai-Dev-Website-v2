"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import zero from "@/Assets/Images/Newframe1.png";
import one from "@/Assets/Images/Newframe2.png";
import two from "@/Assets/Images/Newframe3.png";
import three from "@/Assets/Images/Newframe4.png";

const steps = [
  { img: zero, text: "Step One: We started with a simple vision in Alexandria." },
  { img: one, text: "Step Two: First success with a major local client." },
  { img: two, text: "Step Three: Expansion into the Middle East region." },
  { img: three, text: "Step Four: Leading in AI and digital transformation." },
];

function StepText({ text }) {
  return (
    <motion.p
      initial={{ x: 50, opacity: 0 }}   // ↓ بدل 300 خليتها 50 بس
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-lg font-semibold text-gray-200 max-w-sm text-center md:text-start"
    >
      {text}
    </motion.p>
  );
}

export default function Animate() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:max-w-3xl sm:max-w-md lg:ms-[150px] px-4">
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center md:items-start justify-start w-full mb-12"
        >
          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-shrink-0"
          >
            <Image
              src={step.img}
              alt={`frame-${i}`}
              width={250}
              height={250}
              className="rounded-lg w-[200px] sm:w-[220px] md:w-[250px] h-auto"
            />
          </motion.div>

          {/* التكست */}
          <div className="mt-4 md:mt-0 md:ms-6 w-full md:w-auto">
            <StepText text={step.text} />
          </div>
        </div>
      ))}
    </div>
  );
}
