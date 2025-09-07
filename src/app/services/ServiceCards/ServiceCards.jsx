"use client"

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import bulbFill from "@/Assets/Icons/bulb_fill.svg"
import settings from "@/Assets/Icons/settings.svg"
import storyRocket from "@/Assets/Icons/storyRocket.svg"
import brain from "@/Assets/Icons/brain.svg"
import mindMap from "@/Assets/Icons/mindMap.svg"
import certificate from "@/Assets/Icons/certificate.svg"
import chart from "@/Assets/Icons/chart.svg"
import graduate from "@/Assets/Icons/graduate.svg"
import Image from "next/image"

const servicesData = [
  {
    category: "Development",
    title: "Custom Software Development",
    description: "Tailored enterprise solutions built with cutting-edge technologies",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: bulbFill,
  },
  {
    category: "Development",
    title: "SaaS Product Engineering",
    description: "End-to-End SaaS platform development from concept to scale",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: settings,
  },
  {
    category: "AI/ML",
    title: "AI & LLM Solutions",
    description: "Advanced AI integration and custom Language Model implementations",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: brain,
  },
  {
    category: "Integration",
    title: "Automation & Integrations",
    description: "Streamlined workflows and system integrations to boost efficiency",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: mindMap,
  },
  {
    category: "Quality Assurance",
    title: "Testing & QA Services",
    description: "Comprehensive testing solutions ensuring bulletproof software quality",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: certificate,
  },
  {
    category: "Marketing",
    title: "SEO Services",
    description: "Data-driven SEO strategies that drive organic growth and visibility",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: chart,
  },
  {
    category: "Development",
    title: "Technical Training for Dev Teams",
    description: "Upskill your development team with expert-led training programs",
    techStack: ["Next.js", "OpenAI GPT-4", "React", "Node.js"],
    features: ["Scalable Architecture", "AI Integration", "Payment Integration", "Security First"],
    timeline: "3–6 months",
    icon: graduate,
  },
];

export default function ServiceCards() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">
      {servicesData.map((service, index) => (
        <CardWithAnimatedBorder key={index} className="p-6 rounded-2xl  card-gradient shadow-lg ">
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-500/10">
            <Image src={service.icon} alt={service.title} className="w-6 h-6" />
          </div>

          {/* Content */}
          <span className="text-sm text-sky-400 font-medium mt-3 block">{service.category}</span>
          <h3 className="text-xl font-bold text-white mt-1">{service.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{service.description}</p>

          {/* Tech Stack */}
          <div className="mt-4">
            <h4 className="text-gray-400 text-xs uppercase">Tech Stack</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {service.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#1a2338] text-sky-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features inline */}
          <div className="mt-4">
            <h4 className="text-gray-400 text-xs uppercase">Key Features</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-[#1a2338] text-gray-300 rounded-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400/80">Timeline: {service.timeline}</span>
            <button className="px-3 py-1 rounded-full bg-sky-500 text-white text-xs hover:bg-sky-600 transition">
              Learn more →
            </button>
          </div>
        </CardWithAnimatedBorder>
      ))}
    </div>
  );
}
