"use client"
import earth from "@/Assets/Images/earth.svg"
import HeroSection from "@/components/PagesHero/PagesHero";

import { useState } from "react";
import Image from "next/image";
import mockup from "@/Assets/Images/mockup.svg";
import rightArrow from "@/Assets/Icons/rightArrow.svg";
import diary from "@/Assets/Icons/diary.svg";
import folder from "@/Assets/Icons/folder.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";

export default function PortfolioPage() {
  const cards = [
    {
      industry: "AI/ML",
      title: "Hope Design Agency",
      description: "Creative agency project...",
      technologies: ["Next.js", "OpenAI GPT-4", "React"],
      link: "#",
    },
    {
      industry: "E-Commerce",
      title: "Shopify Clone",
      description: "Modern e-commerce platform...",
      technologies: ["React", "Tailwind", "Node.js"],
      link: "#",
    },
    {
      industry: "Fintech",
      title: "Banking App",
      description: "Secure banking solution...",
      technologies: ["Next.js", "TypeScript", "GraphQL"],
      link: "#",
    },
    {
      industry: "Healthcare",
      title: "Medical Dashboard",
      description: "Healthcare data insights...",
      technologies: ["React", "D3.js", "Firebase"],
      link: "#",
    },
    {
      industry: "Education",
      title: "Learning Platform",
      description: "Personalized learning system...",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      link: "#",
    },
    {
      industry: "AI/ML",
      title: "AI Chatbot",
      description: "Custom chatbot with GPT-4...",
      technologies: ["OpenAI GPT-4", "Next.js", "Supabase"],
      link: "#",
    },
  ];


  const [industry, setIndustry] = useState("All Industries");
  const [tech, setTech] = useState("All Technologies");
  const industries = ["All Industries", ...new Set(cards.map((c) => c.industry))];
  const technologies = ["All Technologies", ...new Set(cards.flatMap((c) => c.technologies))];


  const filteredCards = cards.filter((card) => {
    const matchIndustry =
      industry === "All Industries" || card.industry === industry;
    const matchTech =
      tech === "All Technologies" || card.technologies.includes(tech);
    return matchIndustry && matchTech;
  });


  return (
    <main className="min-h-[60vh] container mx-auto  py-12 text-white">
      <HeroSection
        buttonText="Our portfolio"
        buttonIcon={folder}
        title="Fueling Businesses with Interstellar Success"
        description="Witness how we transform complex challenges into real-world, innovative solutions
tailored to the unique needs of our esteemed clients"
        imageSrc={earth}
        imageAlt="Hero Image"
        imageAnimationClass="animate-[spin_180s_linear_infinite]"
        containerClass="overflow-hidden "
        imageStyle="scale-115"
        buttonClass="w-fit "
        titleClass=""
        descClass="" />


      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button
          className={`flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto`}
        >
          <Image src={diary} alt="directions icon " width={20} height={20} />
          Innovative Scenarios        </button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Shaping Tomorrow’s Possibilities
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-8 mx-auto">
          Dive into visionary projects and creative use cases—imagined, designed, and built to spark inspiration and showcase what’s possible with next-gen technology.
        </p>
      </div>


      {/* 🔹 Filters */}
      <div className="flex flex-col sm:flex-row gap-4  w-full  m-auto sm:justify-center lg:justify-start   items-center mb-10">
        {/* Industry Filter */}
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="bg-[#0F0229] border border-gray-600 rounded-lg px-4 w-fit py-3 md:w-fit"
        >
          {industries.map((ind, i) => (
            <option key={i} value={ind}>
              {ind}
            </option>
          ))}
        </select>

        {/* Technology Filter */}
        <select
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          className="bg-[#0F0229] border border-gray-600 rounded-lg px-4 py-3 w-fit md:w-fit"
        >
          {technologies.map((t, i) => (
            <option key={i} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Cards Grid */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
        {filteredCards.map((card, i) => (
          <div key={i} className="relative flex justify-center group my-14">
            {/* الصورة فوق الكارد */}
            <div className="absolute -top-20 z-20">
              <Image
                src={mockup}
                alt="mockup"
                className="w-80 rotate-[-8deg] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
              />
            </div>

            {/* الكارد */}
            <CardWithAnimatedBorder className="relative rounded-2xl card-gradient p-6 text-[#E0E0E0]  sm:w-[440px] border border-[#00c6ff]/20 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(0,198,255,0.6)]">
              <div className="mt-32">
                <button className="px-4 cursor-pointer py-1 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm">
                  {card.industry}
                </button>
                <h3 className="text-lg font-bold mt-3 gradient-hero-text">
                  {card.title}
                </h3>
                <p className="text-sm leading-6 text-gray-400/80 mt-2 line-clamp-3">
                  {card.description}
                </p>

                {/* Technologies */}
                <div className="mt-4">
                  <p className="text-sm text-cyan-700 mb-2 font-semibold">
                    Technologies:
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {card.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-xl border border-[#00c6ff]/50 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* زرار Visit */}
              <div className="mt-6">
                <button className="w-full py-3 rounded-full form-btn text-white cursor-pointer font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105">
                  Visit
                  <Image src={rightArrow} alt="rightArrow" width={18} height={18} />
                </button>
              </div>
            </CardWithAnimatedBorder>
          </div>
        ))}
      </div>







    </main>
  );
}


