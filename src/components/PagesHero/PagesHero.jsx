"use client"
import React from "react";
import Image from "next/image";
import star from "@/Assets/Icons/star.svg"
import bot from "@/Assets/Icons/bot.svg"
export default function HeroSection({
    buttonText = "Our Story",
    buttonIcon,
    title = "From Vision to Revolution",
    description = "The story of how a small team in Alexandria became Egypt's leading force in AI and software innovation, transforming businesses across the Middle East and beyond.",
    imageSrc,
    imageAlt = "Hero Image",
    imageAnimationClass = "",
    containerClass = "",
    buttonClass = "",
    titleClass = "",
    descClass = "",
    imageStyle = ""
}) {
    return (
        <section
            className={`relative flex flex-col md:flex-row items-center  justify-between    h-vh  text-white ${containerClass}`}
        >
            {/* النصوص */}
            <div className="flex flex-col  gap-3     ">
                {/* زرار */}
                <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-sm ${buttonClass}`}
                >
                    {buttonIcon && <Image src={buttonIcon} alt="icon" width={16} height={16} />}
                    {buttonText}
                </button>

                {/* العنوان */}
                <h1 className={` text-xl sm:text-2xl md:text-[60px] lg:w-[900px]  gradient-hero-text  leading-snug md:leading-tight  ${titleClass}`}>
                    {title}
                </h1>

                {/* الوصف */}
                <p className={`text-gray-400/80  text-base md:text-lg lg:text-xl leading-7 md:leading-[31px] w-full md:max-w-[600px] lg:max-w-[690px] self-start ${descClass}`}>
                    {description}
                </p>
            </div>

            {/* صورة الهيرو */}
            <div className={` flex justify-start  w-4/5 ${imageAnimationClass}`}>
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={600}
                        className={`object-contain ${imageStyle}  `}
                    />
                )}

            </div>
            {/* Chat icon floating button */}
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20">
                <Image src={star} alt="Chatbot" width={60} height={60} className="animate-float relative md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]" />
                <Image src={bot} alt="Chatbot" width={52} height={52} className="animate-float absolute top-[18%] left-[7%] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]" />
            </div>
        </section>
    );
}
