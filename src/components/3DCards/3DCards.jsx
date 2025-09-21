"use client";
import React from "react";
import Image from "next/image";
import rightArrow from "@/Assets/Icons/rightArrow.svg";
import { CardWithAnimatedBorder } from "../CardWithAnimatedBorder/CardWithAnimatedBorder";
import Link from "next/link";
import hopedesign from "@/Assets/Images/hopedesign.png";
import whitestone from "@/Assets/Images/white-stone.png";
import waterfront from "@/Assets/Images/waterfront.png";

export default function ThreeDimensionCards() {
  const cards = [
    {
      industry: "Marketing & Advertising",
      title: "Hope Design Agency",
      image: hopedesign,
      imageAlt: "Hope Design Agency",
      description: "Hope Design Agency is a creative agency that specializes in branding, design, and marketing. We help businesses create a strong brand identity and connect with their target audience.",
      technologies: ["Next.js", "React"],
      link: "https://hope-design-marketing-website.vercel.app",
    },
    {
      industry: "Real Estate",
      title: "White Stone Real Estate",
      image: whitestone,
      imageAlt: "White Stone Real Estate",
      description: "White Stone Real Estate is a real estate agency that specializes in selling and renting properties. We help people find their dream home and sell their property.",
      technologies: ["Next.js", "Node.js"],
      link: "https://www.whstoneinv.com",
    },
    {
      industry: "Real Estate",
      title: "Waterfront - Seif Group",
      image: waterfront,
      imageAlt: "Waterfront - Seif Group",
      description: "Waterfront is a project of Seif Group, it is a project of a real estate development company in Egypt. VR experience for the project and units for the project.",
      technologies: ["Next.js", "GraphQL"],
      link: "https://www.waterfronteg.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:gap-6 lg:px-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 mt-10">
        {cards.map((card, i) => (
          <div key={i} className="relative flex justify-center group lg:my-10 sm:my-16 my-12">
            {/* الصورة برا الكارد عشان متتقصش */}
            <div className="absolute -top-36 z-20">
              <Image
                src={card.image}
                alt={card.imageAlt}
                width={1000}
                height={1000}
                className="w-[400px] rotate-[-8deg] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[-4deg]"
              />
            </div>

            {/* الكارد نفسه */}
            <CardWithAnimatedBorder className="relative rounded-2xl card-gradient p-6 text-[#E0E0E0] w-[460px] border border-[#00c6ff]/20 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(0,198,255,0.6)]">
              {/* المحتوى */}
              <div className="lg:mt-24 sm:mt-32 mt-10 text-start">
                <div className="flex justify-start items-center">
                  <span
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  `}
                  >
                    {card.industry}
                  </span>
                </div>

                <h3 className="text-lg font-bold mt-2 gradient-hero-text">
                  {card.title}
                </h3>
                <p className="text-md leading-7 text-gray-400/80       mt-2 line-clamp-3">
                  {card.description}
                </p>

                {/* Technologies */}
                <div className="mt-4">
                  <p className="text-sm  text-cyan-500 mb-3 font-semibold">Used Technologies:</p>
                  <div className="flex gap-2 flex-wrap">
                    {card.technologies.map((technology, index) => (
                      <span key={index} className="px-4 py-2   text-xs rounded-xl border border-[#00c6ff]/50  text-white">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* زرار */}
              <div className="mt-6">
                <Link href={card.link} className="w-full py-4 cursor-pointer  rounded-full form-btn  text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  Visit 
                  <Image src={rightArrow} alt="rightArrow" width={20} height={20} />
                </Link>
              </div>
            </CardWithAnimatedBorder>
          </div>
        ))}
      </div>

      {/* زرار تحت الكروت */}
      <Link href="/portfolio" className="px-6 py-2 cursor-pointer border border-[#00c6ff]/50 rounded-full text-cyan-700 hover:bg-[#00c6ff]/10 transition-all">
        View All Projects
      </Link>
    </div>
  );
}
