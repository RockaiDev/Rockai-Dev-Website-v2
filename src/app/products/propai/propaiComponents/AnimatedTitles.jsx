import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import astro from '@/Assets/Images/astro.svg';
import rights from '@/Assets/Icons/rights.svg';
import flash from '@/Assets/Icons/flash.svg';
import brain from '@/Assets/Icons/brain.svg';
import Image from 'next/image';

export default function AnimatedTitles() {
    const features = [
        {
            icon: flash,
            title: "AI-Powered Assistance",
            description: " Smart lead scoring, task automation, and predictive insights."
        },
        {
            icon: rights,
            title: "Automated Payment Plans",
            description: "Flexible schedules, instant tracking, and hassle-free financial management."
        },
        {
            icon: brain,
            title: "Advanced Team Analytics",
            description: "Comprehensive reporting with real-time KPIs and performance tracking."
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
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

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            x: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.4
            }
        }
    };

    return (
        <motion.div 
            className="min-h-screen relative overflow-hidden pb-12 sm:pb-16 lg:pb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Starfield Background */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Title */}
            <motion.div 
                className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
                variants={titleVariants}
            >
                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold gradient-hero-text">
                    Why Propai CRM is Different
                </h2>
            </motion.div>

            {/* Main Content */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:pl-6 lg:pl-8 xl:px-20 gap-8 lg:gap-12">
                {/* Left Side - Feature Cards */}
                <motion.div 
                    className="flex-1 space-y-6 sm:space-y-8 max-w-xl w-full"
                    variants={containerVariants}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="relative"
                        >
                            {/* Animated Background */}
                            <motion.div 
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            />
                            
                            {/* Content */}
                            <div className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 sm:p-8">
                                {/* Icon Container */}
                                <motion.div 
                                    className="relative flex-shrink-0"
                                    initial={{ scale: 0.75 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Icon Glow Effect */}
                                    <motion.div 
                                        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl scale-150"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                                        viewport={{ once: true }}
                                    />
                                    
                                    {/* Icon Background */}
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30">
                                        <Image 
                                            src={feature.icon} 
                                            alt={feature.title} 
                                            width={24} 
                                            height={24} 
                                            className="sm:w-8 sm:h-8 object-contain"
                                        />
                                    </div>
                                </motion.div>

                                {/* Text Content */}
                                <motion.div 
                                    className="flex-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right Side - Astronaut */}
                <motion.div 
                    className="absolute right-0 -top-50 z-0 opacity-80 sm:opacity-100 hidden lg:block"
                    variants={imageVariants}
                    style={{
                        right: 0,
                        top: -100
                    }}
                >
                    <Image 
                        src={astro} 
                        alt="Astronaut" 
                        width={400} 
                        height={400} 
                        className="object-contain w-full max-w-[400px] xl:max-w-[600px] right-0 top-0" 
                    />
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32" />
        </motion.div>
    );
}
