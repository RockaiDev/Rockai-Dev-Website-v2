import React from 'react';
import Image from 'next/image'; 
 


import earthWhite from "@/Assets/Icons/earthWhite.svg";
import refresh from "@/Assets/Icons/refresh.svg";
import message from "@/Assets/Icons/message.svg";
import target from "@/Assets/Icons/target.svg";
import bulb from "@/Assets/Icons/bulb.svg";

const Gamified = () => {
    const features = [
        {
            icon: bulb,
            title: "Instant Intelligence",
            description: " Lightning-fast answers save time and effort always.",
        },
        {
            icon: target,
            title: "Smart Recommendations",
            description: " Personalized suggestions match preferences, challenges, and needs.",
        },
        {
            icon: message,
            title: "Real-Time Project Support",
            description: "Guided assistance ensures smooth actions across platform.",
        },
        {
            icon: refresh,
            title: "Seamless Human Handoff",
            description: "Smooth shift from AI speed to experts.",
        },
        {
            icon: earthWhite,
            title: "Multilingual Conversations",
            description: "Effortless communication supported in English and Arabic.",
        },
    ];

    return (
        <section className="py-24 text-white  overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-center text-2xl md:text-3xl  gradient-hero-text font-bold mb-12">
                    What can you achieve with the Rockai Chatbot?
                </h2>

                <div className="relative flex flex-wrap justify-center  ">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col items-center justify-center text-center p-2
                                w-full md:w-1/2 lg:w-1/3
                                border-b   border-[#eaeaea93]
                                bg-transparent
                                backdrop-filter backdrop-blur-sm   hover:bg-[linear-gradient(180deg,rgba(16,219,219,0.01)_0%,rgba(0,71,165,0.1)_100%)] transition-all duration-300
    
                                ${index === 0 || index === 1  ? 'lg:border-r' : ''}
                                ${index === 0 || index === 3 ? 'md:border-r' : ''}
                                ${index >= features.length - (features.length % 3 === 0 ? 3 : features.length % 3) ? 'lg:border-b-0' : ''}
                                ${index >= features.length - (features.length % 2 === 0 ? 2 : features.length % 2) ? 'md:border-b-0' : ''}
                                ${index >= features.length - (features.length % 2 === 1? 5 : features.length % 2) ? 'ps-5' : ''}
                            `}
                            style={{ minHeight: '200px' }} 
                        >
                            <div className="mb-4 pt-8 h-[100px]">
                                <Image src={feature.icon} alt={feature.title} width={60} height={60} className=''  />
                            </div>
                            <h3 className="text-[22px] font-semibold mb-2 h-[40px] gradient-hero-text">{feature.title}</h3>
                            <p className="mb-4 text-gray-400/80 text-[18px]" >{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gamified;

