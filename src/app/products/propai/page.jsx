

"use client"
import HeroSection from "@/components/PagesHero/PagesHero";

import Image from "next/image";
import phone from "@/Assets/Icons/phone.svg";
import key from "@/Assets/Icons/key.svg";
import React from 'react'

import charts from "@/Assets/Icons/charts.svg"

import crm1 from "@/Assets/Images/propai.png";
import AnimatedTitles from "./propaiComponents/AnimatedTitles";
import SecureCards from "./SecureCards/SecureCards";
import ComperhensiveCards from "./ComperhensiveCards/ComperhensiveCards";
import OrbitCards from "./OrbitCards/OrbitCards";
import Iframe from "./Iframe/Iframe";
import TestimonialCard from "./Testmonials/TestimonialCard";
import { motion } from "framer-motion";


export default function page() {
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

  return (
    <motion.main 
      className="min-h-screen mx-auto py-8 sm:py-12 lg:py-16 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="relative z-10 mx-4 sm:mx-6 lg:mx-16"
        variants={sectionVariants}
      >
        <HeroSection
          buttonText="Enterprise Real Estate CRM"
          buttonIcon={charts}
          title="Propai CRM"
          description="Advanced CRM solution powered by AI for real estate teams with role-based security, automated operations, detailed insightful reports, real-time analytics, and predictive actions that drive conversions."
          imageSrc={crm1}
          imageAlt="Hero Image"
          imageAnimationClass=""
          containerClass=" "
          imageStyle="scale-100 rounded-xl shadow-xl shadow-sky-500/50 hover:shadow-sky-500/100 transition-all duration-300 border border-sky-500/50"
          buttonClass="w-fit"
          requestBtn="Request Access"
          requestBtnIcon={key}
          talkToSalesBtn="Talk To Sales"
          talkToSalesBtnIcon={phone}
           btnMsg1="Hello, I would like to request access to propai CRM."
        btnMsg2="Hello, I would like to talk to a sales representative about propai CRM "
        />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <AnimatedTitles />
      </motion.div>

      <motion.div 
        className="secHeader mb-1 mx-auto text-center pt-8 sm:pt-10 px-4 sm:px-6"
        variants={headerVariants}
      >
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Secure Access Control
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-6 sm:mb-8 mx-auto leading-relaxed">
          Propai's role-based system ensures every team member has exactly the right level of access and visibility
        </p>
      </motion.div>

      <motion.div variants={sectionVariants}>
        <SecureCards />
      </motion.div>

      <motion.div 
        className="secHeader mb-1 mx-auto text-center pt-8 sm:pt-10 px-4 sm:px-6"
        variants={headerVariants}
      >
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
          Comprehensive Feature Set
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-6 sm:mb-8 mx-auto leading-relaxed">
          Every feature designed specifically for real estate teams and optimized for maximum efficiency
        </p>
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ComperhensiveCards />
      </motion.div>




      <motion.div 
        className="flex flex-col"
        variants={sectionVariants}
      >
        <Iframe />
        <OrbitCards />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <TestimonialCard />
      </motion.div>

      <motion.div 
        className="rounded-xl mx-4 sm:mx-6 lg:mx-7"
        variants={sectionVariants}
      >
        <motion.div 
          className="secHeader mb-1 text-center pt-8 sm:pt-10 px-4 sm:px-6"
          variants={headerVariants}
        >
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
         
Ready to Accelerate Your Team Growth?

          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-4xl lg:mb-12 mb-6 sm:mb-8 mx-auto leading-relaxed">
           Discover how real estate teams transform operations with Propai CRM. Experience the power of purpose-built software.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            variants={headerVariants}
          >
            <motion.button
              onClick={() =>
                window.open(
                  `https://wa.me/201555867970?text=${encodeURIComponent(
                    "Hello, I would like to request access to propai CRM."
                  )}`,
                  "_blank"
                )
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 w-full sm:w-auto"
            >
              <Image src={key} alt="icon" width={16} height={16} className="sm:w-5 sm:h-5" />
             Request a Demo
            </motion.button>

            <motion.button
              onClick={() =>
                window.open(
                  `https://wa.me/201555867970?text=${encodeURIComponent(
                    "Hi, I would like to talk to the sales team about propai CRM ."
                  )}`,
                  "_blank"
                )
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 hover:bg-blue-900/50 hover:text-cyan-600 text-sm sm:text-base transition-all duration-300 w-full sm:w-auto"
            >
              <Image src={phone} alt="icon" width={16} height={16} className="sm:w-5 sm:h-5" />
             Chat with Our Experts
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  )
}   
