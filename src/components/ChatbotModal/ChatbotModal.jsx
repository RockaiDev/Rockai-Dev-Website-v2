"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ROKAIBOT from "@/Assets/Images/ROKAIBOT.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotModal({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Rockai, your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // Animation variants
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Show bot typing
    setTyping(true);
    setTimeout(() => {
      setTyping(false);

      // Add bot message
      const responses = [
        "That's a great question! Let me help you with that.",
        "I understand what you're looking for. Here's how I can assist you.",
        "Thanks for reaching out! I'm here to help with your needs.",
        "I'd be happy to provide more information about our services.",
        "Let me connect you with the right solution for your project."
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      const newMessage = { sender: "bot", text: response };
      setMessages((prev) => [...prev, newMessage]);
    }, 2000);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-end justify-center p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
      >
        {/* Enhanced Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />

        {/* Modal panel */}
        <motion.div 
          className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a1a2e] text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-cyan-500/20"
          variants={modalVariants}
        >
          {/* Enhanced Header */}
          <div className="flex items-center gap-4 p-6 border-b border-cyan-500/20 relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Image src={ROKAIBOT} alt="Rockai Bot" width={48} height={48} className="drop-shadow-lg" />
            </motion.div>
            <div>
              <h2 className="font-bold text-lg gradient-hero-text">Rockai AI Assistant</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Online & Ready to Help</span>
              </div>
            </div>
            {onClose && (
              <motion.button
                onClick={onClose}
                aria-label="Close chatbot"
                className="absolute w-10 h-10 right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-2 rounded-full hover:bg-red-500/20 transition-all duration-200 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl ">✕</span>
              </motion.button>
            )}
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
            <AnimatePresence>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {msg.sender === "bot" && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Image src={ROKAIBOT} alt="bot" width={32} height={32} className="mr-3 mt-1" />
                    </motion.div>
                  )}
                  <motion.div
                    className={`px-4 py-3 rounded-2xl max-w-xs sm:max-w-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-gray-100 border border-gray-600/30"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Enhanced Typing indicator */}
            {typing && (
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Image src={ROKAIBOT} alt="bot" width={32} height={32} className="mr-1" />
                <div className="flex gap-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-4 py-3 rounded-2xl border border-gray-600/30">
                  <motion.span 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.span 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.span 
                    className="w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Enhanced Input */}
          <div className="flex items-center border-t border-cyan-500/20 p-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Ask me anything about our services..."
                className="w-full bg-gray-800/50 border border-gray-600/30 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
            </div>
            <motion.button
              onClick={handleSend}
              className="ml-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!input.trim()}
            >
              <span className="text-white font-semibold">Send</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
