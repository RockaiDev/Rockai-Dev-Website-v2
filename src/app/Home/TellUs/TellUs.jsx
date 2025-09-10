"use client";
import sendplane from "@/Assets/Icons/send-plane.svg";
import sendplaneWhite from "@/Assets/Icons/sendPlaneWhite.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";


export default function Tellus() {
    return (
        <div className=" flex items-center justify-center  px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-20   w-full justify-between mb-10">
                {/* Left Section */}
                <div className="flex flex-col items-start justify-center gap-6 md:gap-6 max-w-2xl">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md `}
                    >
                        <Image src={sendplane} alt="send plane Icon" width={20} height={20} />
                      Need a custom solution ?
                    </button>
           <div className="content">
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px]  font-bold gradient-hero-text  text-white mb-3 sm:mb-4 leading-tight md:leading-tight">
                        Tell Us Your Challenge
                    </h1>
                    <p className="text-gray-400/80 text-base sm:text-lg max-w-lg ">
                        Every business is unique. Share your specific problem and let our
                        experts design a tailored solution for you.
                    </p>
           </div>
                </div>

                {/* Right Section (Form inside CardWithAnimatedBorder) */}
                <CardWithAnimatedBorder className="rounded-2xl p-[1px] w-full md:w-auto">
                    <div className="form-gradient  rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full">
                        <form className="space-y-4 p-4 sm:p-6 md:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full py-4 px-2 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full py-4 px-2 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full py-4 px-2 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your company industry"
                                    className="w-full py-4 px-2 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                                />
                            </div>

                            <textarea
                                placeholder="Tell us about the challenge you're facing, your current situation..."
                                rows={4}
                                className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg form-btn  text-white font-semibold shadow-lg hover:opacity-90 transition"
                            >
                                <Image src={sendplaneWhite} alt="send plane Icon" width={20} height={20} className="inline-block mr-2" />
                                 Submit your problem
                            </button>
                        </form>
                    </div>
                </CardWithAnimatedBorder>
            </div>
        </div>
    );
}
