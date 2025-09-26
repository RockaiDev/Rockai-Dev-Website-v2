"use client"
import React from "react";
import Image from "next/image";
import one from "@/Assets/Icons/one.svg";
import two from "@/Assets/Icons/two.svg";
import three from "@/Assets/Icons/three.svg";
import four from "@/Assets/Icons/four.svg";

export default function HowAttendai() {
  const items = [
    {
      icon: one,
      title: "Assign Barcode",
      desc: "Each student gets a unique barcode for instant identification",
    },
    {
      icon: two,
      title: "Real-time Updates",
      desc: "Attendance tracked on scan; parents notified immediately",
    },
    {
      icon: three,
      title: "Smart Scheduling",
      desc: "Easy class editing and revenue tracking in one place",
    },
    {
      icon: four,
      title: "Insightful Analytics",
      desc: "Comprehensive stats for classes, students, and total revenue",
    },
  ];

  return (
    <div className="w-full text-center pt-24 px-6">
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
        How HodurAI Works
      </h2>

      <div className="mt-16 flex flex-col xl:flex-row justify-center xl:items-start gap-12 md:gap-0 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center text-center px-6 relative"
          >
            <div className="mb-6 relative flex items-center justify-center">
              {/* Container ثابت للصور */}
              <div className="w-[120px] h-[120px] flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={120} 
                  height={120}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* الخط الأفقي */}
              {index !== items.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 left-[140px] w-[200px] h-[3px] bg-gray-600/40 z-10"></div>
              )}
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}