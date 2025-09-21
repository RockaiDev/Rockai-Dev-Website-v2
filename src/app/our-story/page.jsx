
"use client";

import HeroSection from "@/components/PagesHero/PagesHero";
import { motion } from "framer-motion";
import planet from "@/Assets/Icons/planet.svg";
import Asteroid from "@/Assets/Images/Asteroid.svg";
import Image from "next/image";
import route from "@/Assets/Icons/route.svg";
import directions from "@/Assets/Icons/directions.svg";
import Features from "./OurStoryCards/ourStoryCards";
import Animate from "@/components/AnimateOnScroll/Animate";

export default function OurStoryPage() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.main 
      className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 py-8 sm:py-12 lg:py-16 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection
          buttonText="Our Story"
          buttonIcon={planet}
          title="From Vision to Revolution"
          description="The story of how a small team in Alexandria became Egypt's leading force in AI and software innovation, transforming businesses across the Middle East and beyond."
          imageSrc={Asteroid}
          imageAlt="Hero Image"
          imageAnimationClass="animate-[spin_40s_linear_infinite]"
          containerClass="overflow-hidden"
          buttonClass="w-fit"
          titleClass=""
          descClass=""
        />
      </motion.div>

      <motion.div 
        className="secHeader mb-1 mx-auto text-center pt-8 sm:pt-10 px-4 sm:px-6"
        variants={headerVariants}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md m-auto"
        >
          <Image src={route} alt="route icon" width={16} height={16} className="sm:w-5 sm:h-5" />
          Our Journey
        </motion.button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Our Journey Through Time
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-2xl mx-auto leading-relaxed">
          Every milestone represents countless hours of innovation, dedication,
          and the relentless pursuit of excellence.
        </p>

        {/* Animate Section */}
        <motion.div 
          className="flex justify-center items-center w-full mt-8 sm:mt-10"
          variants={sectionVariants}
        >
          <div className="w-full flex justify-center">
            <Animate />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="secHeader mb-1 mx-auto text-center pt-8 sm:pt-10 px-4 sm:px-6"
        variants={headerVariants}
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md m-auto"
        >
          <Image src={directions} alt="directions icon" width={16} height={16} className="sm:w-5 sm:h-5" />
          What Drives Us
        </motion.button>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Our Core Values
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-2xl mx-auto leading-relaxed">
          These principles guide every decision we make and every solution we
          build.
        </p>
      </motion.div>

      <motion.div 
        className=""
        variants={sectionVariants}
      >
        <Features />
      </motion.div>
    </motion.main>
  );
}
