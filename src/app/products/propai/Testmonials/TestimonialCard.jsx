"use client";
import React, { useState } from "react";
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

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center w-full py-10 ">
      <div className="relative max-w-6xl w-full text-center px-6">
        {testimonials.map((t, index) =>
          index === current ? (
            <div key={t.id}>
              {/* صورة المستخدم */}
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
              
                  className="rounded-full b"
                />
              </div>

              {/* الاسم */}
              <h2 className="text-white text-xl font-semibold">{t.name}</h2>

              {/* النجوم */}
              <div className="flex justify-center mt-1 mb-6 text-[#3bb5ff]">
                {Array(t.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={20} fill="#3bb5ff" stroke="none" />
                  ))}
              </div>

              {/* الريفيو */}
              <div className="relative border border-gray-400/20 rounded-lg p-6 text-white text-sm leading-relaxed shadow-lg">
                {t.review}
              </div>
            </div>
          ) : null
        )}

        {/* الأسهم */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-  transition"
        >
          <ChevronLeft className="text-white " size={60} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full  transition"
        >
          <ChevronRight className="text-white" size={60} />
        </button>
      </div>
    </div>
  );
}
