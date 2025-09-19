"use client";
import React from 'react'
import Image from 'next/image';
import verified from "@/Assets/Icons/verified.svg";
import LogosCarousel from '../Swiper/Swiper';
import { motion } from "framer-motion";

export default function Powered() {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const carouselVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <>
            <section className="pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-7xl">
                <motion.div 
                    className="secHeader mb-8 sm:mb-12 lg:mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md m-auto hover:bg-blue-900/50 transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src={verified} alt="verified icon " width={20} height={20} />
                        Trusted Partners
                    </motion.button>

                    <motion.h2 
                        className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] font-bold gradient-hero-text leading-tight"
                        variants={itemVariants}
                    >
                        Powering Egypt's Most Ambitious Businesses
                    </motion.h2>
                    
                    <motion.p 
                        className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400/80 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
                        variants={itemVariants}
                    >
                        Turning client visions into reality
                    </motion.p>

                    <motion.div 
                        className="px-0 sm:px-4 lg:px-8 xl:px-16 mt-8 sm:mt-12 lg:mt-16"
                        variants={carouselVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <LogosCarousel />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}