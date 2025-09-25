"use client"

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, BarChart3, TrendingUp, Users, Activity, VolumeX, Volume2 } from 'lucide-react';
import { CardWithAnimatedBorder } from '@/components/CardWithAnimatedBorder/CardWithAnimatedBorder';

export default function Iframe() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 2);
    };


    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 2) % 2);
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

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

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <motion.div
            className="min-h-screen relative overflow-hidden py-8 sm:py-12 lg:py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 2 + Math.random() * 3,
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

            <div className="relative z-10 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                        {/* Left Panel - Content */}
                        <motion.div
                            className="space-y-6 sm:space-y-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                            Real-time Analytics Dashboard
                                        </h1>
                                        <div className="flex space-x-2">
                                            <motion.button
                                                onClick={prevSlide}
                                                variants={buttonVariants}
                                                whileHover="hover"
                                                whileTap="tap"
                                                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 text-blue-400"
                                            >
                                                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </motion.button>
                                            <motion.button
                                                onClick={nextSlide}
                                                variants={buttonVariants}
                                                whileHover="hover"
                                                whileTap="tap"
                                                className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 text-blue-400"
                                            >
                                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </motion.button>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                                        Monitor key metrics and KPIs with interactive visualizations that update in real-time
                                    </p>

                                    {currentSlide === 0 ? (
                                        <motion.div
                                            className="space-y-4 sm:space-y-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3 sm:mb-4">Key Features</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Performance Analytics</span>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Lead Tracking</span>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Recent Activity</span>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Agent Leaderboard</span>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Task Management</span>
                                                </motion.div>
                                                <motion.div
                                                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg bg-slate-700/30"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-200 text-xs sm:text-sm">Data Visuals</span>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            className="space-y-4 sm:space-y-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-3 sm:mb-4">Performance Metrics</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                                                <motion.div
                                                    className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="text-xl sm:text-2xl font-bold text-blue-400">96%</div>
                                                    <div className="text-xs sm:text-sm text-slate-300">AI Accuracy</div>
                                                </motion.div>
                                                <motion.div
                                                    className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="text-xl sm:text-2xl font-bold text-green-400">95%</div>
                                                    <div className="text-xs sm:text-sm text-slate-300">Client Satisfaction</div>
                                                </motion.div>
                                                <motion.div
                                                    className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="text-xl sm:text-2xl font-bold text-purple-400">+65%</div>
                                                    <div className="text-xs sm:text-sm text-slate-300">Performance Growth</div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Panel - Video */}
                        <motion.div 
                            className="space-y-6"
                            variants={itemVariants}
                        >
                            <motion.div 
                                className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl relative">
                                    <video
                                        ref={videoRef}
                                        src="/final.mp4"
                                        autoPlay
                                        loop
                                        playsInline
                                        muted={isMuted}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                    {/* زرار الميوت */}
                                     <button
                                        onClick={toggleMute}
                                        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-black/60 text-white text-xs sm:text-sm hover:bg-black/80 transition"
                                    >
                                        {isMuted ? " 🔇" : " 🔊"}
                                    </button>
                                    
                                </div>
                                <div className="mt-4 text-center">
                                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Real Estate Power</h3>
                                    <p className="text-slate-400 text-xs sm:text-sm"> 
                                        Manage leads and properties efficiently with Propai’s smart CRM
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
