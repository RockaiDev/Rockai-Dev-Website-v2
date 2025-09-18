import React, { useEffect, useRef, useState } from 'react';
import astro from '@/Assets/Images/astro.svg';
import rights from '@/Assets/Icons/rights.svg';
import flash from '@/Assets/Icons/flash.svg';
import brain from '@/Assets/Icons/brain.svg';
import Image from 'next/image';

export default function AnimatedTitles() {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);

    const features = [
        {
            icon: flash,
            title: "Role-Based Experience",
            description: "Secure data access and clear visibility with precise roles for every team member."
        },
        {
            icon: rights,
            title: "Inventory-Focused",
            description: "Manage properties, projects, developers, and zones with streamlined, interactive tools."
        },
        {
            icon: brain,
            title: "Real-Time KPIs",
            description: "Instant insights on leads and team performance through advanced dashboards."
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems(prev => new Set([...prev, index]));
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '-50px'
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden pb-24">
            {/* Starfield Background */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.8 + 0.2
                        }}
                    />
                ))}
            </div>

            {/* Title */}
            <div className="text-center py-20">
                <h2 className="mt-4 lg:text-[62px] sm:text-[42px] text-[26px] font-bold gradient-hero-text">
                    Why Propai CRM is Different
                </h2>
            </div>

            {/* Main Content */}
            <div className="relative flex items-center justify-between px-8 lg:px-20">
                {/* Left Side - Feature Cards */}
                <div ref={sectionRef} className="flex-1 space-y-8 max-w-2xl">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            data-index={index}
                            className={`relative transition-all duration-1000 transform ${
                                visibleItems.has(index) 
                                    ? 'translate-x-0 opacity-100' 
                                    : '-translate-x-20 opacity-0'
                            }`}
                        >
                            {/* Animated Background */}
                            <div className={`absolute inset-0 rounded-2xl transition-all duration-1000 ${
                                visibleItems.has(index)
                                    ? 'bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30 backdrop-blur-sm border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                                    : 'bg-transparent border-transparent'
                            }`} />
                            
                            {/* Content */}
                            <div className="relative flex items-start space-x-6 p-8">
                                {/* Icon Container */}
                                <div className={`relative transition-all duration-1000 ${
                                    visibleItems.has(index) ? 'scale-100' : 'scale-75'
                                }`}>
                                    {/* Icon Glow Effect */}
                                    <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                                        visibleItems.has(index)
                                            ? 'bg-cyan-400/20 blur-xl scale-150'
                                            : 'bg-transparent'
                                    }`} />
                                    
                                    {/* Icon Background */}
                                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1000 ${
                                        visibleItems.has(index)
                                            ? 'bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30'
                                            : 'bg-gray-700'
                                    }`}>
                                        <Image 
                                            src={feature.icon} 
                                            alt={feature.title} 
                                            width={32} 
                                            height={32} 
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className={`flex-1 transition-all duration-1000 delay-300 ${
                                    visibleItems.has(index)
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                }`}>
                                    <h3 className="lg:text-2xl text-xl font-bold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Astronaut */}
                <div className="absolute right-0 z-0 opacity-80 sm:opacity-100 hidden md:block">
                    <Image src={astro} alt="Astronaut" width={600} height={600} className="object-contain" />
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 " />
        </div>
    );
}
