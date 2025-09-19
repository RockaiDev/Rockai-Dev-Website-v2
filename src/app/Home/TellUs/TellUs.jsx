"use client";
import sendplane from "@/Assets/Icons/send-plane.svg";
import sendplaneWhite from "@/Assets/Icons/sendPlaneWhite.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Tellus() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.3
            }
        }
    };

    const inputVariants = {
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

    return (
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full justify-between mb-10 max-w-7xl">
                {/* Left Section */}
                <motion.div 
                    className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-6 lg:gap-8 max-w-2xl w-full lg:w-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.button
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md hover:bg-blue-900/50 transition-colors duration-300"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Image src={sendplane} alt="send plane Icon" width={20} height={20} />
                        Need a custom solution ?
                    </motion.button>
                    
                    <motion.div className="content" variants={itemVariants}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[50px] font-bold gradient-hero-text text-white mb-3 sm:mb-4 leading-tight">
                            Share Your Vision with Us
                        </h1>
                        <p className="text-gray-400/80 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                            Your goals drive innovation. Tell us what you're aiming for, and our AI-powered experts will craft a future-ready solution.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Section (Form inside CardWithAnimatedBorder) */}
                <motion.div
                    className="w-full lg:w-auto lg:max-w-lg"
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <CardWithAnimatedBorder className="rounded-2xl p-[1px] w-full">
                        <div className="form-gradient rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full">
                            <motion.form 
                                className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    variants={containerVariants}
                                >
                                    <motion.input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                        variants={inputVariants}
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <motion.input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                        variants={inputVariants}
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>

                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    variants={containerVariants}
                                >
                                    <motion.input
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                        variants={inputVariants}
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <motion.input
                                        type="text"
                                        placeholder="Enter your company industry"
                                        className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                                        variants={inputVariants}
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>

                                <motion.textarea
                                    placeholder="Tell us about your vision and your current situation..."
                                    rows={4}
                                    className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                                    variants={inputVariants}
                                    whileFocus={{ scale: 1.02 }}
                                ></motion.textarea>

                                <motion.button
                                    type="submit"
                                    className="w-full py-3 sm:py-4 rounded-lg form-btn text-white font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base"
                                    variants={inputVariants}
                                    whileHover={{ 
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Image src={sendplaneWhite} alt="send plane Icon" width={20} height={20} className="inline-block mr-2" />
                                    Start Building My Solution
                                </motion.button>
                            </motion.form>
                        </div>
                    </CardWithAnimatedBorder>
                </motion.div>
            </div>
        </div>
    );
}
