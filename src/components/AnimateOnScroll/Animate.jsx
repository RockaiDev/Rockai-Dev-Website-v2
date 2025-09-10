"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import zero from "@/Assets/Images/Newframe1.png";
import one from "@/Assets/Images/Newframe2.png";
import two from "@/Assets/Images/Newframe3.png";
import three from "@/Assets/Images/Newframe4.png";

const steps = [
  {
    img: zero,
    title: "Step One",
    description: "We started with a simple vision in Alexandria.",
  },
  {
    img: one,
    title: "Step Two",
    description: "First success with a major local client.",
  },
  {
    img: two,
    title: "Step Three",
    description: "Expansion into the Middle East region.",
  },
  {
    img: three,
    title: "Step Four",
    description: "Leading in AI and digital transformation.",
  },
];

function StepText({ title, description }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}   
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-sm text-center md:text-start"
    >
      <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-base md:text-lg text-gray-300">{description}</p>
    </motion.div>
  );
}

export default function Animate() {
  return (
    <div className="flex flex-col justify-center items-center w-full lg:max-w-3xl sm:max-w-md px-4 translate-x-2 sm:translate-x-4 md:translate-x-8 lg:translate-x-12">
      {steps.map((step, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center md:items-center justify-start w-full "
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
          <div className="mt-4 md:mt-0 md:ms-6 w-full md:max-w-sm self-center">
            <StepText title={step.title} description={step.description} />
          </div>
        </div>
      ))}
    </div>
  );
}
