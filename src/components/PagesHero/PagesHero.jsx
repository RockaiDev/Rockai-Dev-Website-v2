"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function HeroSection({
    buttonText = "",
    buttonIcon,
    title = "",
    description = "",
    imageSrc,
    imageAlt = "Hero Image",
    imageAnimationClass = "",
    containerClass = "",
    buttonClass = "",
    titleClass = "",
    descClass = "",
    imageStyle = "",
    requestBtn = "",
    requestBtnIcon,
    talkToSalesBtn = "",
    talkToSalesBtnIcon,
    btnMsg1 = "",
    btnMsg2 = ""

}) {

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
        hidden: { 
            opacity: 0, 
            y: 30,
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

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

const chatButtonVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.9
        }
    };
    return (
        <motion.section
            className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen text-white ${containerClass}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* النصوص */}
            <motion.div 
                className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full lg:w-1/2 lg:pr-8"
                variants={containerVariants}
            >
                {/* زرار */}
                {buttonText && (
                    <motion.button
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-xs sm:text-sm w-fit ${buttonClass}`}
                    >
                        {buttonIcon && <Image src={buttonIcon} alt="icon" width={20} height={20} className="sm:w-6 sm:h-6" />}
                        {buttonText}
                    </motion.button>
                )}

                {/* العنوان */}
                <motion.h1 
                    variants={itemVariants}
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] gradient-hero-text leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight ${titleClass}`}
                >
                    {title}
                </motion.h1>

                {/* الوصف */}
                <motion.p 
                    variants={itemVariants}
                    className={`text-gray-400/80 text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 w-full ${descClass}`}
                >
                    {description}
                </motion.p>
                {
                    requestBtn && talkToSalesBtn && (
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8"
                        >
                            <motion.button 
                                onClick={() =>
                                    window.open(
                                        `https://wa.me/201555867970?text=${encodeURIComponent(
                                            btnMsg1
                                        )}`,
                                        "_blank"
                                    )
                                } 
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`flex cursor-pointer items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 w-full sm:w-auto ${buttonClass}`}
                            >
                                {requestBtnIcon && <Image src={requestBtnIcon} alt="icon" width={16} height={16} className="sm:w-5 sm:h-5" />}
                                {requestBtn}
                            </motion.button>
                            <motion.button 
                                onClick={() =>
                                    window.open(
                                        `https://wa.me/201555867970?text=${encodeURIComponent(
                                            btnMsg2
                                        )}`,
                                        "_blank"
                                    )
                                } 
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-semibold bg-blue-900/30 text-cyan-700/80 hover:bg-blue-900/50 hover:text-cyan-600 text-sm sm:text-base transition-all duration-300 w-full sm:w-auto ${buttonClass}`}
                            >
                                {talkToSalesBtnIcon && <Image src={talkToSalesBtnIcon} alt="icon" width={16} height={16} className="sm:w-5 sm:h-5" />}
                                {talkToSalesBtn}
                            </motion.button>
                        </motion.div>
                    )
                }


            </motion.div>

            {/* صورة الهيرو */}
            <motion.div 
                className={`flex justify-center lg:justify-end mt-8 sm:mt-10 lg:mt-0 w-full lg:w-1/2 ${imageAnimationClass}`}
                variants={imageVariants}
            >
                {imageSrc && (
                    <motion.div
                        whileHover={{ 
                            scale: 1.05,
                            rotate: 2,
                            transition: { duration: 0.3 }
                        }}
                        className="relative"
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={400}
                            height={400}
                            className={`object-contain w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] ${imageStyle}`}
                            priority
                        />
                    </motion.div>
                )}
            </motion.div>

        </motion.section>
    );
}
