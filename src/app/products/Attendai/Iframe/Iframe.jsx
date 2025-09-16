import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, BarChart3, TrendingUp, Users, Activity } from 'lucide-react';
import { CardWithAnimatedBorder } from '@/components/CardWithAnimatedBorder/CardWithAnimatedBorder';

export default function Iframe() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 2);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + 2) % 2);
    };

    return (
        <>

            <div className="min-h-screen  relative overflow-hidden ">
                {/* Background particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-20 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 flex items-center justify-center p-4">
                    <div className="w-full ">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Panel - Content */}
                            <div className="space-y-8">
                                <div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                Real-time Analytics Dashboard
                                            </h1>
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={prevSlide}
                                                    className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 text-blue-400"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={nextSlide}
                                                    className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-all duration-300 text-blue-400"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-slate-300 text-lg leading-relaxed">
                                            Monitor key metrics and KPIs with interactive visualizations that update in real-time
                                        </p>

                                        {currentSlide === 0 ? (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-semibold text-blue-400 mb-4">Key Features</h3>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <BarChart3 className="w-5 h-5 text-blue-400" />
                                                        <span className="text-slate-200">Scalable Architecture</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <Activity className="w-5 h-5 text-green-400" />
                                                        <span className="text-slate-200">API Integration</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <TrendingUp className="w-5 h-5 text-purple-400" />
                                                        <span className="text-slate-200">Real-time Features</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <Users className="w-5 h-5 text-orange-400" />
                                                        <span className="text-slate-200">Security First</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <Play className="w-5 h-5 text-red-400" />
                                                        <span className="text-slate-200">Live data streaming</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-700/30">
                                                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                                                        <span className="text-slate-200">Custom widgets</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-6">
                                                <h3 className="text-xl font-semibold text-purple-400 mb-4">Performance Metrics</h3>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                                        <div className="text-2xl font-bold text-blue-400">99.9%</div>
                                                        <div className="text-sm text-slate-300">Uptime</div>
                                                    </div>
                                                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
                                                        <div className="text-2xl font-bold text-green-400">2.1ms</div>
                                                        <div className="text-sm text-slate-300">Response Time</div>
                                                    </div>
                                                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                                                        <div className="text-2xl font-bold text-purple-400">1M+</div>
                                                        <div className="text-sm text-slate-300">Data Points</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel - YouTube Iframe */}
                            <div className="space-y-6">
                                <div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-6 shadow-2xl">
                                    <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0&showinfo=0&modestbranding=1"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-semibold text-white mb-2">Dashboard Tutorial</h3>
                                        <p className="text-slate-400 text-sm">Learn how to use the analytics dashboard effectively</p>
                                    </div>
                                </div>






                            </div>




                        </div>
                    </div>
                </div>

<div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-300">Active Users</span>
                            <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-lg font-bold text-white">48K</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-300">Revenue</span>
                            <BarChart3 className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-lg font-bold text-white">$127K</div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-300">Conversion</span>
                            <Activity className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="text-lg font-bold text-white">3.2%</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-300">Bounce Rate</span>
                            <Users className="w-4 h-4 text-orange-400" />
                        </div>
                        <div className="text-lg font-bold text-white">24%</div>
                    </div>
                </div>
            </div>
              


            </div>

  {/* Mock Dashboard Preview */}
            


        </>


    );
}
