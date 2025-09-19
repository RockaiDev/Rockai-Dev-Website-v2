
"use client";

import AI from "@/Assets/Icons/AI.svg";
import Image from "next/image";
import illustrator from "@/Assets/Images/illustrator.png"
import Gamified from "./Gamified";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ChatbotModal from "@/components/ChatbotModal/ChatbotModal";




export default function VRAssistant() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isChatOpen, setIsChatOpen] = useState(false);

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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6,
            },
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    return (
        <section ref={ref} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 mx-auto text-center max-w-7xl overflow-hidden">

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
                    <Image src={AI} alt="AI icon Icon" width={20} height={20} />
                    Rockai Virtual Assistant
                </motion.button>

                <motion.h2 
                    className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text leading-tight md:leading-tight px-2"
                    variants={itemVariants}
                >
                    Next-Gen AI Chat Support
                </motion.h2>
                <motion.p 
                    className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400/80 max-w-3xl mx-auto px-2 sm:px-4"
                    variants={itemVariants}
                >
                    Experience seamless support, project insights, and expert guidance through our conversational AI—built to empower your journey.
                </motion.p>
            </motion.div>

            <motion.div 
                className="w-full px-2 sm:px-4 lg:px-8"
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <Image 
                    src={illustrator} 
                    alt="illustrator" 
                    className="w-full max-w-[400px] sm:max-w-[480px] md:max-w-[640px] ml-5 lg:max-w-none scale-125 md:scale-110 mx-auto" 
                    width={1400}
                    height={1400}
                />
                <motion.div 
                    className="m-auto w-fit mt-8 sm:-mt-10 md:-mt-20"
                    variants={buttonVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <button 
                        onClick={() => setIsChatOpen(true)}
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 sm:px-5 md:px-6 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 text-sm sm:text-base font-semibold cursor-pointer animate-pulse hover:animate-none"
                    >
                        Try It Now
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <Gamified/>
            </motion.div>

            {isChatOpen && (
                <ChatbotModal onClose={() => setIsChatOpen(false)} />
            )}

        </section>
    );
}
