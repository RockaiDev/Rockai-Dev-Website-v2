"use client";
import Image from 'next/image'

import HeroRock from "@/Assets/Images/HerRocket.png"
import RokaiDev from "@/Assets/Icons/RokaiDev.svg"
import star from "@/Assets/Icons/star.svg"
import bot from "@/Assets/Icons/bot.svg"
import Fire from "@/Assets/Icons/Fire.svg"

import React from 'react'
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function Hero() {
    return (
        <div className="relative  overflow-hidden">
            {/* Stars background */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-6  flex items-center ">
                <div className="flex  w-full justify-between items-start">
                    
                    {/* Left side - Text content */}
                    <div className="space-y-8 mt-8 w-3/3">
                        <div>
                            <h1 className="text-5xl lg:text-[75px]  gradient-hero-text   leading-tight  ">
                                Leading Egypt's <br />Tech <span className="text-transparent bg-clip-text gradient-hero-subText">
                                    Revolution
                                </span>
                                <br />
                                
                            </h1>
                        </div>
                        
                        <p className="text-gray-400/80  text-lg lg:text-xl max-w-lg leading-[31px]">
                            Cutting-edge AI solutions, innovative SaaS platforms,
                            and custom software development that transforms
                            businesses across the Middle East and beyond.
                        </p>
                        
                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full  transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <span className="w-5 h-5  rounded-full flex items-center justify-center">
                                    <Image src={Fire} alt="Fire" width={20} height={20} ></Image>
                                </span>
                                Discover Our Impact
                            </button>
                            
                            <ShimmerButton className="flex items-center glow-bottom  justify-center gap-3 border-2  text-cyan-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                                <Image src={RokaiDev} alt="Chatbot" width={20} height={20} className="" />
                                Rockai Chatbot
                            </ShimmerButton>
                        </div>
                    </div>
                    
                    {/* Right side - Rocket image */}
                    <div className="relative flex justify-center lg:justify-start animate-float w-5/5     ">
                        {/* Rocket */}
                        <div className="relative">
                            <Image 
                                src={HeroRock} 
                                alt="Hero Rocket" 
                                width={400} 
                                height={600} 
                                className="w-80 lg:w-[900px] h-auto object-cover animate-float"
                                priority
                            />
                            
                       
                        
                        </div>
                        
                   
                    </div>
                </div>
            </div>
            
            {/* Chat icon floating button */}
            <div className="fixed bottom-8 right-8 z-20">
            <Image src={star} alt="Chatbot" width={80} height={80} className="animate-float relative " />
            <Image src={bot} alt="Chatbot" width={70} height={70} className="animate-float absolute top-[20%] left-[7%] " />
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}