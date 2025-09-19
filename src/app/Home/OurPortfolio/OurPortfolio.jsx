"use client";
import React from 'react'
import secFolder from "@/Assets/Icons/secFolder.svg"
import Image from "next/image";
import ThreeDimensionCards from '@/components/3DCards/3DCards';
import { motion } from "framer-motion";

export default function OurPortfolio() {
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

    const cardsVariants = {
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
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-7xl">
            <motion.div 
                className="secHeader mb-12 sm:mb-16 lg:mb-20"
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
                    <Image src={secFolder} alt="secFolder icon " width={20} height={20} />
                    Our Portfolio
                </motion.button>

                <motion.h2 
                    className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px] font-bold gradient-hero-text leading-tight"
                    variants={itemVariants}
                >
                    Fueling Businesses with Interstellar Success
                </motion.h2>
                
                <motion.p 
                    className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400/80 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
                    variants={itemVariants}
                >
                    Witness how we transform complex challenges into real-world, innovative solutions. tailored to the unique needs of our esteemed clients

                </motion.p>
            </motion.div>

            <motion.div 
                className="px-0 sm:px-4 lg:px-8 xl:px-16"
                variants={cardsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <ThreeDimensionCards/>
            </motion.div>
        </section>
    )
}