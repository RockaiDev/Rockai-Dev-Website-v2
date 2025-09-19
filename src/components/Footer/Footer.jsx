"use client";
import React from 'react'
import phone from "@/Assets/Icons/phone.svg"
import msg from "@/Assets/Icons/msg.svg"
import location from "@/Assets/Icons/location.svg"
import fb from "@/Assets/Icons/fb.svg"
import insta from "@/Assets/Icons/insta.svg"
import X from "@/Assets/Icons/X.svg"
import tiktok from "@/Assets/Icons/tiktok.svg"
import logo from "@/Assets/Images/Logo.png";
import Image from "next/image";
import Link from 'next/link'
import Newsletter from '@/app/Home/Newsletter/Newsletter'
import { motion } from "framer-motion";
import ChatbotModal from "../ChatbotModal/ChatbotModal";
import { useState } from "react";
import star from "@/Assets/Icons/star.svg"
import bot from "@/Assets/Icons/bot.svg"


export default function Footer({ isPropaiPage }) {
    const [isChatOpen, setIsChatOpen] = useState(false);
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={`${isPropaiPage && "px-4 sm:px-6 lg:px-10"}`}>
            <Newsletter />
            
            {/* Desktop Footer */}
            <motion.footer 
                className="lg:block hidden text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                        {/* Company Info Section */}
                        <motion.div className="lg:col-span-1" variants={itemVariants}>
                            <div className="flex items-center gap-3 mb-6">
                                <Image src={logo} alt="Logo" width={100} height={100} className="hover:scale-105 transition-transform duration-300" />
                            </div>

                            <p className="text-gray-400/80 text-sm sm:text-base text-center md:text-left leading-relaxed mb-8 max-w-sm">
                                Rockai Dev ventures beyond boundaries, designing seamless digital journeys that inspire, empower, and carry Egypt's spirit into the world of AI.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex gap-2 sm:gap-4">
                                {[
                                    { src: fb, alt: "Facebook", href: "https://facebook.com/rockaidev" },
                                    { src: insta, alt: "Instagram", href: "https://instagram.com/rockaidev" }, 
                                    { src: tiktok, alt: "TikTok", href: "https://tiktok.com/@rockaidev" }
                                ].map((social, index) => (
                                    <Link href={social.href} key={social.alt}>
                                        <motion.div
                                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
                                            variants={socialVariants}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Image src={social.src} alt={social.alt} width={24} height={24} className="sm:w-16 sm:h-16" />
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links and Contact Section */}
                        <motion.div className="flex justify-end gap-8 sm:gap-12 lg:gap-16" variants={itemVariants}>
                            {/* Quick Links Section */}
                            <div className="lg:col-span-1">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h3>
                                <ul className="space-y-2 sm:space-y-3">
                                    {[
                                        { href: "/", text: "Home" },
                                        { href: "/our-story", text: "Our Story" },
                                        { href: "/services", text: "Services" },
                                        { href: "/products", text: "Products" },
                                        { href: "/portfolio", text: "Portfolio" },
                                        { href: "/join-us", text: "Join Us" }
                                    ].map((link, index) => (
                                        <motion.li
                                            key={link.text}
                                            variants={itemVariants}
                                            whileHover={{ x: 5 }}
                                        >
                                            <Link 
                                                href={link.href} 
                                                className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm sm:text-base block"
                                            >
                                                {link.text}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Info Section */}
                            <div className="lg:col-span-1">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Contact Info</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {[
                                        { icon: phone, href: "tel:+201555867970", text: "+201555867970" },
                                        { icon: msg, href: "mailto:info@rockaidev.com", text: "info@rockaidev.com" },
                                        { icon: location, href: "https://maps.app.goo.gl/cuXqNe2q9XsE5xp56", text: "Smouha, Alexandria Governorate, Egypt" }
                                    ].map((contact, index) => (
                                        <motion.div
                                            key={contact.text}
                                            className="flex items-center gap-3"
                                            variants={itemVariants}
                                            whileHover={{ x: 5 }}
                                        >
                                            <Image src={contact.icon} alt={contact.text} className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <Link 
                                                href={contact.href} 
                                                className="text-gray-400/80 text-sm sm:text-base hover:text-cyan-500 transition-colors"
                                            >
                                                {contact.text}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Copyright Section */}
                    <motion.div 
                        className="border-t border-gray-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8"
                        variants={itemVariants}
                        whileHover={{ y: -2 }}
                    >
                        <p className="text-gray-400/80 text-sm sm:text-base text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                            <span>©{new Date().getFullYear()}</span>
                            <Link href="/" className="text-cyan-500 font-medium hover:text-cyan-400 transition-all duration-300 hover:scale-105">
                                Rockai Dev
                            </Link>
                            <span className="text-gray-600">|</span>
                            <span>All Rights Reserved</span>
                        </p>
                    </motion.div>
                </div>
            </motion.footer>

            {/* Mobile Footer */}
            <motion.footer 
                className="block lg:hidden text-white py-8 sm:py-12 border-t border-gray-400/20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="px-4 sm:px-6">
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center justify-center gap-3 mb-6 mt-6">
                            <Image src={logo} alt="Logo" width={80} height={80} className="sm:w-24 sm:h-24 hover:scale-105 transition-transform duration-300" />
                        </div>
                        
                        <p className="text-gray-400/80 text-sm sm:text-base text-center leading-relaxed mb-6 max-w-md mx-auto">
                            Rockai Dev ventures beyond boundaries, designing seamless digital journeys that inspire, empower, and carry Egypt's spirit into the world of AI.
                        </p>
                        
                        {/* Social Media */}
                        <div className="flex gap-4 mt-8 sm:mt-12 justify-center">
                            {[
                                { src: fb, alt: "Facebook" },
                                { src: insta, alt: "Instagram" },
                                { src: tiktok, alt: "TikTok" }
                            ].map((social, index) => (
                                <motion.div
                                    key={social.alt}
                                    variants={socialVariants}
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href="#">
                                        <Image 
                                            src={social.src} 
                                            alt={social.alt} 
                                            width={100} 
                                            height={100} 
                                            className="cursor-pointer hover:opacity-80 transition-opacity w-12 h-12 duration-300" 
                                        />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div 
                        className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 text-center"
                        variants={itemVariants}
                    >
                        <p className="text-gray-400/80 text-sm sm:text-base">
                            Copyright ©2025{' '}
                            <span className="text-cyan-600 font-medium hover:text-cyan-500 transition-colors duration-300">Rockai Dev</span>
                            {' '}| All Rights Reserved.
                        </p>
                    </motion.div>
                </div>
            </motion.footer>


             {/* Chat icon floating button */}
             <motion.button
                onClick={() => setIsChatOpen(true)}
                className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 cursor-pointer hover:scale-115 transition-all duration-300"
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


            {/* Chatbot Modal */}
            {isChatOpen && (
                <ChatbotModal onClose={() => setIsChatOpen(false)} />
            )}
        </div>
    )
}