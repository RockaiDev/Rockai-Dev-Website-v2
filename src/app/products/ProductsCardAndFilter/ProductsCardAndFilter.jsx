"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import crm1 from "@/Assets/Images/crm1.svg";
import crm2 from "@/Assets/Images/crm2.svg";
import crm3 from "@/Assets/Images/crm3.svg";
import eye from "@/Assets/Icons/eye.svg";
import arrowRight from "@/Assets/Icons/arrowRight.svg"

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

const productsData = [
  {
    id: 1,
    category: "POS",
    title: "SUFRA POS",
    description: "SUFRA is not just a recipe manager. It is the Smart Unified Food Retail Assistant that transforms your POS into a complete restaurant intelligence platform",
    image: crm1,
    technologies: ["Next.js", "OpenAI GPT-4", "React"],
    link:"/pos",
    demo: `https://wa.me/201555867970?text=${encodeURIComponent("Hi, I'd like to request a demo for SUFRA POS.")}`
  },
  {
    id: 2,
    category: "CRM",
    title: "Propai CRM",
    description: "Smart tutoring platform with automated attendance tracking.",
    image: crm2,
    technologies: ["Next.js", "OpenAI GPT-4", "React"],
     link:"/propai",
     demo: `https://wa.me/201555867970?text=${encodeURIComponent("Hi, I'd like to request a demo for Propai CRM.")}`
  },
  {
    id: 3,
    category: "System",
    title: "Hodurai System",
    description: "Smart tutoring platform with automated attendance tracking.",
    image: crm3,
    technologies: ["Next.js", "OpenAI GPT-4", "React"],
    link:"/hodurai",
    demo: `https://wa.me/201555867970?text=${encodeURIComponent("Hi, I'd like to request a demo for Hodurai System.")}`
  },  
];

export default function ProductsCardAndFilter() {
  const [industry, setIndustry] = useState("All Industries");
  const [tech, setTech] = useState("All Technologies");
  const [search, setSearch] = useState("");

  const filteredProducts = productsData.filter((product) => {
    const matchIndustry =
      industry === "All Industries" || product.category === industry;
    const matchTech =
      tech === "All Technologies" ||
      product.technologies.includes(tech);
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchIndustry && matchTech && matchSearch;
  });

  return (
    <div className="text-white p-6 space-y-8">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center w-full">
        <select
          className="bg-[#0F0229] border  border-gray-600 rounded-lg px-4 py-3 w-full md:w-1/2"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option>All Industries</option>
          <option>CRM</option>
          <option>rock</option>
        </select>

        <select
          className="bg-[#0F0229] border border-gray-600 rounded-lg px-4 py-3 w-full md:w-1/2"
          value={tech}
          onChange={(e) => setTech(e.target.value)}
        >
          <option>All Technologies</option>
          <option>Next.js</option>
          <option>OpenAI GPT-4</option>
          <option>React</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-8">
        {filteredProducts.map((product) => (
          <CardWithAnimatedBorder
            key={product.id}
            className="rounded-2xl p-6 card-gradient shadow-xl"
          >
            <div className="space-y-4">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={300}
                className="rounded-lg"
              />
              <span className="text-sky-400 text-sm font-medium">
                {product.category}
              </span>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-400 text-sm">{product.description}</p>

              <div className="flex flex-wrap gap-2">
                {product.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#1b2233] px-3 py-1 rounded-full text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-between gap-6 pt-4 lg:w-full ">
                <Link  href={product.link ? `/products/${product.link}` : "#"} className="px-6 lg:py-4  py-3 flex rounded-full justify-center lg:w-1/2 bg-sky-500 text-white text-md items-center  hover:bg-sky-600 transition cursor-pointer">
                  View Details                           <Image src={arrowRight} alt="arrow" className="w-5 h-5 ml-2" />
                </Link>
                <HoverBorderGradient onClick={() => window.open(product.demo, "_blank")}>
                  <div className="flex gap-3 py-2 lg:px-6 lg:w-[250px] justify-center items-center cursor-pointer">
                    <Image src={eye} alt="eye" width={20} height={20} />
                    <span>View Demo</span>
                  </div>
                </HoverBorderGradient>
              </div>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>




    </div>
  );
}
