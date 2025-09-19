"use client";

import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import { ArrowRight } from "lucide-react";
import Rocket from "@/Assets/Icons/Rocket.svg";
import container from "@/Assets/Icons/container.png";
import roFill from "@/Assets/Icons/roFill.svg";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const expertiseData = [
  {
    icon: roFill,
    title: "SaaS Development",
    description: "Scalable software-as-a-service solutions",
  },
  {
    icon: roFill,
    title: "AI & LLM Integration",
    description: "Advanced AI and language model implementations",
  },
  {
    icon: roFill,
    title: "Custom Software",
    description: "Tailored enterprise software solutions",
  },
  {
    icon: roFill,
    title: "Automation",
    description: "Streamline workflows with seamless connectivity",
  },
  {
    icon: roFill,
    title: "Testing",
    description: "Reliable quality assurance for robust platforms",
  },
  {
    icon: roFill,
    title: "Team Training",
    description: "Upskill your teams with expert-led programs",
  },
];

export default function OurExpertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOutx`",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mx-auto text-center max-w-7xl">
      <motion.div 
        className="secHeader mb-8 sm:mb-10 lg:mb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md m-auto"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src={Rocket} alt="Rocket Icon" width={20} height={20} />
          Our Expertise
        </motion.button>

        <motion.h2 
          className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text leading-tight md:leading-tight px-2"
          variants={itemVariants}
        >
          Comprehensive Tech Solutions
        </motion.h2>
        <motion.p 
          className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-3xl mx-auto px-2 sm:px-4"
          variants={itemVariants}
        >
          From AI-powered applications to enterprise software, we deliver cutting-edge solutions that drive business growth and innovation.
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            variants={{cardVariants, delay: 0.2 + index * 0.1}}
            whileInView="hover"
            className="w-full"
          >
            <CardWithAnimatedBorder
              className="rounded-[35px] ourExpertise hover:border-cyan-500 hover:glow-bottom border border-white/10 bg-[#0f022996] p-4 sm:p-6 w-full h-full min-h-[20 0px] sm:min-h-[320px] lg:min-h-[290px] flex flex-col justify-center"
            >
              {/* Icon Container */}
              <motion.div 
                className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6"
                variants={iconVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover="hover"
              >
                {/* Background container */}
                <Image
                  src={container}
                  alt="container"
                  fill
                  className="object-contain"
                />

                {/* Icon inside container */}
                <Image
                  src={item.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="absolute inset-0 m-auto sm:w-12 sm:h-12 lg:w-12 lg:h-12"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div 
                className="flex flex-col items-center text-center space-y-3 sm:space-y-4 flex-grow"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold gradient-hero-text leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400/80 leading-relaxed px-2 sm:px-0">
                  {item.description}
                </p>
              </motion.div>
            </CardWithAnimatedBorder>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
