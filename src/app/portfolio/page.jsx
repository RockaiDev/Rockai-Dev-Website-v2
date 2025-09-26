// SEO Metadata for Portfolio Page
// export const metadata = {
//   title: "Portfolio - RockAI Dev's Success Stories & Client Projects",
//   description: "Explore RockAI Dev's portfolio of successful projects including White Stone, Red Ocean, James Map, Pro Deal, Apex, AlexChem, and Hope Design. See our expertise in action.",
//   keywords: "RockAI Dev portfolio, client projects, success stories, web development projects, software development portfolio, AI projects, Egypt software company",
//   authors: [{ name: "RockAI Dev Team" }],
//   robots: "index, follow",
//   openGraph: {
//     type: "website",
//     title: "Portfolio - RockAI Dev's Success Stories & Client Projects",
//     description: "Explore RockAI Dev's portfolio of successful projects including White Stone, Red Ocean, James Map, Pro Deal, Apex, AlexChem, and Hope Design.",
//     images: [
//       {
//         url: "/Logo.png",
//         width: 1200,
//         height: 630,
//         alt: "RockAI Dev Portfolio - Success Stories",
//       },
//     ],
//     url: "https://www.rockaidev.com/portfolio",
//     siteName: "RockAI Dev",
//     locale: "en_US",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Portfolio - RockAI Dev's Success Stories & Client Projects",
//     description: "Explore RockAI Dev's portfolio of successful projects including White Stone, Red Ocean, James Map, Pro Deal, Apex, AlexChem, and Hope Design.",
//     images: ["/Logo.png"],
//     site: "@rockaidev",
//     creator: "@rockaidev",
//   },
//   alternates: {
//     canonical: "https://www.rockaidev.com/portfolio",
//   },
// };

"use client"
import earth from "@/Assets/Images/earth.svg"
import HeroSection from "@/components/PagesHero/PagesHero";

import { useState } from "react";
import Image from "next/image";
import mockup from "@/Assets/Images/mockup.svg";
import hopedesign from "@/Assets/Images/hopedesign.png";
import whitestone from "@/Assets/Images/white-stone.png";
import waterfront from "@/Assets/Images/waterfront.png";
import prodeal from "@/Assets/Images/prodeal.png";
import jamesmap from "@/Assets/Images/jamesmap.png";
import apex from "@/Assets/Images/apex.png";

import rightArrow from "@/Assets/Icons/rightArrow.svg";
import diary from "@/Assets/Icons/diary.svg";
import folder from "@/Assets/Icons/folder.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Link from "next/link";

export default function PortfolioPage() {
  const cards = [
    {
      industry: "Marketing & Advertising Agency",
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
    {
      industry: "Real Estate",
      title: "Pro Deal Real Estate",
      image: prodeal,
      imageAlt: "Pro Deal Real Estate",
      description: "Pro Deal Real Estate is a real estate agency that specializes in selling and renting properties. We help people find their dream home and sell their property.",
      technologies: ["Next.js", "Node.js"],
      link: "https://www.prodealeg.com",
    },
    {
      industry: "Real Estate Investment",
      title: "James Map Real Estate Investment",
      image: jamesmap,
      imageAlt: "James Map Real Estate Investment",
      description: "James Map Real Estate Investment is a real estate investment company that specializes in buying and selling properties. We help people invest in real estate and sell their property.",
      technologies: ["Next.js", "Node.js"],
      link: "https://www.jamesmap.com",
    },
    {
      industry: "Real Estate",
      title: "APEX Real Estate",
      image: apex,
      imageAlt: "APEX Real Estate",
      description: "APEX Real Estate is a real estate agency that specializes in selling and renting properties. We help people find their dream home and sell their property.",
      technologies: ["Next.js", "Node.js"],
      link: "https://www.apexreal.estate",
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
      <div className="flex flex-col sm:flex-row gap-4  w-full  m-auto sm:justify-center lg:justify-start   items-center mb-32">
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
            <div className="absolute -top-36 z-20">
              <Image
                src={card.image || mockup}
                alt={card.imageAlt}
                width={1000}
                height={1000}
                className="w-[420px] rotate-[-8deg] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
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
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full form-btn text-white cursor-pointer font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  Visit
                  <Image src={rightArrow} alt="rightArrow" width={18} height={18} />
                </Link>
              </div>
            </CardWithAnimatedBorder>
          </div>
        ))}
      </div>







    </main>
  );
}


