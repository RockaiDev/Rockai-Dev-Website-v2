"use client"
import Image from 'next/image'

import HeroRock from "@/Assets/Images/HerRocket.png"
import RokaiDev from "@/Assets/Icons/RokaiDev.svg"
import star from "@/Assets/Icons/star.svg"
import bot from "@/Assets/Icons/bot.svg"
import Fire from "@/Assets/Icons/Fire.svg"

import React, { useEffect, useState } from 'react'
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import ChatbotModal from '@/components/ChatbotModal/ChatbotModal';

export default function Hero() {
    const [stars, setStars] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const generated = Array.from({ length: 50 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
        }));
        setStars(generated);
    }, []);
    return (
        <div className="relative  overflow-hidden">
            {/* Stars background */}
            <div className="absolute inset-0" suppressHydrationWarning>
                {stars.map((starPos, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                        style={{
                            left: starPos.left,
                            top: starPos.top,
                            animationDelay: starPos.animationDelay,
                        }}
                    />
                ))}
            </div>

            {/* Main content container */}
            <div className="relative z-10 container mx-auto px-4 md:px-6  flex items-center ">
                <div className="flex  w-full justify-between items-start flex-col-reverse lg:flex-row gap-8 md:gap-10 lg:gap-0">

                    {/* Left side - Text content */}
                    <div className="space-y-6 md:space-y-8 mt-6 md:mt-8 w-full lg:w-3/3">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px]  gradient-hero-text   leading-snug md:leading-tight  ">
                                Leading Egypt's <br />Tech <span className="text-transparent bg-clip-text gradient-hero-subText">
                                    Revolution
                                </span>
                                <br />

                            </h1>
                        </div>

                        <p className="text-gray-400/80  text-base md:text-lg lg:text-xl max-w-none md:max-w-xl lg:max-w-lg leading-7 md:leading-[31px]">
                            Cutting-edge AI solutions, innovative SaaS platforms,
                            and custom software development that transforms
                            businesses across the Middle East and beyond.
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
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
                    <div className="relative flex justify-center lg:justify-start animate-float w-full lg:w-5/5     ">
                        {/* Rocket */}
                        <div className="relative">
                            <Image
                                src={HeroRock}
                                alt="Hero Rocket"
                                width={400}
                                height={600}
                                className="w-56 sm:w-64 md:w-[480px] lg:w-[900px] h-auto object-cover animate-float"
                                priority
                            />



                        </div>


                    </div>
                </div>
            </div>

            {/* Chat icon floating button */}
            <button onClick={() => setIsChatOpen(true)} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20">
                <Image src={star} alt="Chatbot" width={60} height={60} className="animate-float relative md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]" />
                <Image src={bot} alt="Chatbot" width={52} height={52} className="animate-float absolute top-[18%] left-[7%] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]" />
            </button>

            {isChatOpen && (
                <ChatbotModal onClose={() => setIsChatOpen(false)} />
            )}

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