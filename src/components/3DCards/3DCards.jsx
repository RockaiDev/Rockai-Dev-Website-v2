"use client";
import React from "react";
import Image from "next/image";
import mockup from "@/Assets/Images/mockup.svg";
import rightArrow from "@/Assets/Icons/rightArrow.svg";
import { CardWithAnimatedBorder } from "../CardWithAnimatedBorder/CardWithAnimatedBorder";

export default function ThreeDimensionCards() {
  const cards = [1, 2, 3];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:gap-6 lg:px-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-8 mt-10">
        {cards.map((card, i) => (
          <div key={i} className="relative flex justify-center group lg:my-10 sm:my-16 my-12">
            {/* الصورة برا الكارد عشان متتقصش */}
            <div className="absolute -top-28 z-20">
              <Image
                src={mockup}
                alt="mockup"
                className="w-96 rotate-[-8deg] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[-4deg]"
              />
            </div>

            {/* الكارد نفسه */}
            <CardWithAnimatedBorder className="relative rounded-2xl card-gradient p-6 text-[#E0E0E0] w-[460px] border border-[#00c6ff]/20 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(0,198,255,0.6)]">
              {/* المحتوى */}
              <div className="lg:mt-24 sm:mt-32 mt-10 text-start">
                            <div className="flex justify-start items-center">
                                  <button
                                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md  `}
                              >
                                  AI/ML
                              </button>
                            </div>
              
                <h3 className="text-lg font-bold mt-2 gradient-hero-text">
                  Hope Design Agency
                </h3>
                <p className="text-md leading-7 text-gray-400/80       mt-2 line-clamp-3">
                  Hope Agency was creative in seeing their website design
                  ideas and we developed...
                </p>

                {/* Technologies */}
                <div className="mt-4">
                  <p className="text-sm  text-cyan-700 mb-3 font-semibold">Technologies:</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-2   text-xs rounded-xl border border-[#00c6ff]/50  text-white">
                      Next.js
                    </span>
                    <span className="px-4 py-2   text-xs rounded-xl border border-[#00c6ff]/50  text-white">
                      OpenAI GPT-4
                    </span>
                    <span className="px-4 py-2   text-xs rounded-xl border border-[#00c6ff]/50  text-white">
                      React
                    </span>
                  </div>
                </div>
              </div>

              {/* زرار */}
              <div className="mt-6">
                <button className="w-full py-4   rounded-full form-btn  text-white font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  Visit 
                  <Image src={rightArrow} alt="rightArrow" width={20} height={20} />
                </button>
              </div>
            </CardWithAnimatedBorder>
          </div>
        ))}
      </div>

      {/* زرار تحت الكروت */}
      <button className="px-6 py-2 cursor-pointer border border-[#00c6ff]/50 rounded-full  text-cyan-700 hover:bg-[#00c6ff]/10 transition-all">
        View All Projects
      </button>
    </div>
  );
}
