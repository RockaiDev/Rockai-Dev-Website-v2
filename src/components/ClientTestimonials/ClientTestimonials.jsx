"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import mark from "@/Assets/Images/mark.svg";

// البيانات
const testimonials = [
  {
    id: 1,
    name: "Mark James",
    image: mark,
    rating: 5,
    review:
      "From the very first consultation, Propai went above and beyond to understand my needs. They were patient, attentive, and incredibly resourceful in finding listings that matched my lifestyle and budget.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    image: mark,
        rating: 4,
    review:
      "Amazing experience! The team was professional and helped me find exactly what I was looking for. Highly recommend their services.",
  },
  {
    id: 3,
    name: "David Kim",
    image: mark,
    rating: 5,
    review:
      "A seamless process from start to finish. The attention to detail and customer care were top-notch.",
  },
];

export default function ClientTestimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div 
      className="flex items-center justify-center w-full py-8 sm:py-10 lg:py-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative max-w-4xl w-full text-center px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {/* صورة المستخدم */}
            <motion.div 
              className="flex justify-center mb-4 sm:mb-6"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={80}
                  height={80}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
              </motion.div>
            </motion.div>

            {/* الاسم */}
            <motion.h2 
              className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-2"
              variants={itemVariants}
            >
              {testimonials[current].name}
            </motion.h2>

            {/* النجوم */}
            <motion.div 
              className="flex justify-center mt-1 mb-4 sm:mb-6 text-[#3bb5ff]"
              variants={itemVariants}
            >
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <Star size={16} className="sm:w-5 sm:h-5" fill="#3bb5ff" stroke="none" />
                  </motion.div>
                ))}
            </motion.div>

            {/* الريفيو */}
            <motion.div 
              className="relative border mt-16 border-gray-400/20 rounded-lg p-4 sm:p-6 text-white text-sm sm:text-base leading-relaxed shadow-lg bg-slate-800/30 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              "{testimonials[current].review}"
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* الأسهم */}
        <motion.button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeft className="text-white w-8 h-8 sm:w-12 sm:h-12" />
        </motion.button>
        
        <motion.button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 p-2 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRight className="text-white w-8 h-8 sm:w-12 sm:h-12" />
        </motion.button>

        {/* Dots indicator */}
        <motion.div 
          className="flex justify-center mt-6 space-x-2"
          variants={itemVariants}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#3bb5ff]' : 'bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
