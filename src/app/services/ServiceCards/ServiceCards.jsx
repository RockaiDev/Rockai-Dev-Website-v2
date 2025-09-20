"use client"

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import arrowRight from "@/Assets/Icons/arrowRight.svg"
import { servicesData } from "../data/data"
import Image from "next/image"
import Link from "next/link";

export default function ServiceCards() {
  return (
    <div className="grid gap-6 sm:gap-4 md:gap-10 mt-10 
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {servicesData.map((service, index) => (
        <CardWithAnimatedBorder 
          key={index} 
          className="p-4 sm:p-6 rounded-2xl card-gradient shadow-lg"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            {/* Icon */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-sky-500/10">
              <Image src={service.icon} alt={service.title} className="w-6 h-6" />
            </div>

            <span className="text-xs sm:text-sm text-sky-400 font-medium mt-2 block bg-sky-500/10 px-2 py-1 rounded-full">
              {service.category}
            </span>
          </div>

          {/* Title + Description */}
          <h3 className="text-lg sm:text-xl font-bold text-white gradient-hero-text text-start">
            {service.title}
          </h3>
          <p className="text-gray-400/80 text-sm sm:text-base mt-3 sm:mt-4 text-start">
            {service.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-4">
            <h4 className="text-xs uppercase mb-3 text-sky-400/80 text-start">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs sm:text-sm bg-[#1a2338] rounded-full text-sky-300 border border-sky-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-4 border-b border-gray-400/20 pb-4 ps-2 sm:ps-3">
            <h4 className="text-xs uppercase mb-3 text-sky-400/80 text-start">Key Features</h4>
            <ul className="flex flex-wrap gap-4 sm:gap-8">
              {service.KeyFeatures.map((feature, i) => (
                <li key={i} className="text-xs sm:text-sm text-gray-400/80">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between flex-col lg:flex-row ">
            <span className="text-xs sm:text-sm text-gray-400/80 mb-4 lg:mb-0  ">
              Timeline:{" "}
              <span className="text-sky-400/80 font-medium">{service.timeline}</span>
            </span>

            <Link href={`/services/${service.slug}`}>
              <button className="px-4 sm:px-4 cursor-pointer py-2 sm:py-3 flex rounded-full bg-sky-500 text-white text-sm sm:text-md items-center hover:bg-sky-600 transition cursor-pointer ">
                Learn more
                <Image src={arrowRight} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </Link>
          </div>
        </CardWithAnimatedBorder>
      ))}
    </div>
  );
}
