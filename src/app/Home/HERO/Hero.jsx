"use client"
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import HeroRock from "@/Assets/Images/HerRocket.png"
import RokaiDev from "@/Assets/Icons/RokaiDev.svg"
import star from "@/Assets/Icons/star.svg"
import bot from "@/Assets/Icons/bot.svg"
import Fire from "@/Assets/Icons/Fire.svg"

import React, { useEffect, useState, useRef } from 'react'
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import ChatbotModal from '@/components/ChatbotModal/ChatbotModal';
import Link from 'next/link'

export default function Hero() {
    const [stars, setStars] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const containerRef = useRef(null);

    // Simple inView detection
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    useEffect(() => {
        const generated = Array.from({ length: 50 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 2 + 2,
        }));
        setStars(generated);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="relative overflow-hidden min-h-screen flex items-start md:items-center pt-24     md:pt-24"
        >
            {/* Stars background */}
            <div className="absolute inset-0" suppressHydrationWarning>
                {stars.map((starPos, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-60"
                        style={{
                            left: starPos.left,
                            top: starPos.top,
                            width: starPos.size,
                            height: starPos.size,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: starPos.duration,
                            repeat: Infinity,
                            delay: parseFloat(starPos.animationDelay),
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center">
                <div className="flex w-full justify-between items-center flex-col-reverse lg:flex-row gap-8 md:gap-10 lg:gap-0">

                    {/* Left side - Text content */}
                    <motion.div
                        className="space-y-6 md:space-y-8 mt-6 md:mt-8 w-full lg:w-3/3 text-center lg:text-left"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] gradient-hero-text leading-snug md:leading-tight text-center lg:text-left"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    Leading Egypt's
                                </motion.span>
                                <br />
                                <motion.span
                                    className="text-transparent bg-clip-text gradient-hero-subText"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                                >
                                    Tech Revolution
                                </motion.span>
                            </motion.h1>
                        </motion.div>

                        <motion.p
                            className="text-gray-400/80 text-base md:text-lg lg:text-xl max-w-none md:max-w-xl lg:max-w-lg leading-7 md:leading-[31px] text-center lg:text-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                        >
                            Pioneering the next wave of technology through breakthrough SaaS platforms and transformative software that redefine how businesses innovate and grow across the Middle East and beyond
                        </motion.p>

                        {/* Action buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                        >
                            <Link href="/our-story">
                                <motion.button
                                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 w-full sm:w-auto"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                >
                                    <motion.span>
                                        <Image src={Fire} alt="Fire" width={20} height={20} />
                                    </motion.span>
                                    Discover Our Impact
                                </motion.button>
                            </Link>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, delay: 1.8 }}
                            >
                                <ShimmerButton
                                    onClick={() => setIsChatOpen(true)}
                                    className="flex items-center glow-bottom justify-center gap-3 border-2 text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto"
                                >
                                    <motion.div>
                                        <Image src={RokaiDev} alt="Chatbot" width={20} height={20} />
                                    </motion.div>
                                    Rockai Bot
                                </ShimmerButton>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Rocket image */}
                    <motion.div
                        className="relative flex justify-center lg:justify-start w-full lg:w-5/5 mb-4 lg:mb-0"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        {/* Rocket */}
                        <motion.div
                            className="relative"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 2, 0, -2, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="absolute blur-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/10 rounded-full animate-pulse w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <Image
                                    src={HeroRock}
                                    alt="Hero Rocket"
                                    width={400}
                                    height={600}
                                    className="w-48 sm:w-56 md:w-64 lg:w-[480px] xl:w-[900px] h-auto object-cover relative z-10"
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Chat icon floating button */}
            <motion.button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20 cursor-pointer hover:scale-115 transition-all duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <Image
                        src={star}
                        alt="Chatbot"
                        width={60}
                        height={60}
                        className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]"
                    />
                </motion.div>
                <motion.div
                    animate={{
                        y: [0, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={bot}
                        alt="Chatbot"
                        width={52}
                        height={52}
                        className="absolute top-[18%] left-[7%] w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                    />
                </motion.div>
            </motion.button>

            {isChatOpen && (
                <ChatbotModal onClose={() => setIsChatOpen(false)} />
            )}
        </motion.div>
    )
}