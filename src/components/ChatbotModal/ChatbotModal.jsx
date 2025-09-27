"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ROKAIBOT from "@/Assets/Images/ROKAIBOT.svg";
import { motion, AnimatePresence } from "framer-motion";
import { chatStorage } from "@/lib/chatStorage";
import { parseTextWithLinks } from "@/lib/linkUtils";

export default function ChatbotModal({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Rockai, your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }, 100);
  };

  // Auto-scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  // Auto-scroll when new messages are added
  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages.length]);

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

  // Function to clean text from markdown formatting
  const cleanText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '$1');
  };

  // Component to render message text with clickable links and formatting
  const MessageText = ({ text, sender }) => {
    const segments = parseTextWithLinks(text);

    return (
      <div className="text-sm leading-relaxed space-y-2">
        {segments.map((segment, index) => {
          switch (segment.type) {
            case 'link':
              return (
                <Link
                  key={index}
                  href={segment.content}
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors duration-200 font-medium"
                  onClick={() => {
                    // Close the modal when a link is clicked
                    if (onClose) {
                      onClose();
                    }
                  }}
                >
                  {segment.displayText}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              );

            case 'header':
              const HeaderTag = segment.level === 2 ? 'h2' : 'h3';
              return (
                <HeaderTag
                  key={index}
                  className={`font-bold text-white mb-2 ${segment.level === 2 ? 'text-base' : 'text-sm'
                    }`}
                >
                  {cleanText(segment.content)}
                </HeaderTag>
              );

            case 'emphasized':
              return (
                <p key={index} className="text-white/90 font-semibold">
                  {cleanText(segment.content)}
                </p>
              );

            case 'numbered-item':
              return (
                <div key={index} className="flex items-start gap-2 ml-2">
                  <span className="text-cyan-400 font-semibold text-xs mt-0.5 min-w-[20px]">
                    {segment.number}.
                  </span>
                  <span className="text-white/90">{cleanText(segment.content)}</span>
                </div>
              );

            case 'bullet-item':
              return (
                <div key={index} className="flex items-start gap-2 ml-2">
                  <span className="text-cyan-400 text-xs mt-1.5">•</span>
                  <span className="text-white/90">{cleanText(segment.content)}</span>
                </div>
              );

            case 'linebreak':
              return <br key={index} />;

            case 'text':
            default:
              return (
                <p key={index} className="text-white/90">
                  {cleanText(segment.content)}
                </p>
              );
          }
        })}
      </div>
    );
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setError(null);
    setShowSuggestions(false);
    setIsLoading(true);

    // Add user message
    const userMsg = { sender: "user", text: userMessage };
    const updatedMessages = chatStorage.addMessage(messages, userMsg);
    setMessages(updatedMessages);

    // Show typing indicator
    setTyping(true);

    try {
      // Get conversation history for context
      const conversationHistory = chatStorage.getConversationHistory(updatedMessages);

      // Call the chat API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: conversationHistory
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      // Add bot response
      const botMsg = { sender: "bot", text: data.message };
      const finalMessages = chatStorage.addMessage(updatedMessages, botMsg);
      setMessages(finalMessages);

    } catch (error) {
      console.error('Chat error:', error);
      setError(error.message);

      // Add error message
      const errorMsg = {
        sender: "bot",
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment."
      };
      const finalMessages = chatStorage.addMessage(updatedMessages, errorMsg);
      setMessages(finalMessages);
    } finally {
      setTyping(false);
      setIsLoading(false);
    }
  };

  // Load conversation history on mount
  useEffect(() => {
    const savedMessages = chatStorage.loadConversation();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
      setShowSuggestions(false); // Hide suggestions if there's conversation history
    }
    // Scroll to bottom when modal opens
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  }, []);

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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
          className="relative w-full max-w-3xl h-[85vh] sm:h-[85vh] bg-[#0e112d]/75 backdrop-blur-sm text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700/50"
          variants={modalVariants}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-600/30 bg-gray-900/50">
            <div className="flex items-center gap-3">
              <Image src={ROKAIBOT} alt="Rockai Bot" width={24} height={24} className="drop-shadow-lg" />
              <div>
                <h2 className="font-bold text-white text-base">Rockai Bot</h2>
                <span className="text-sm text-green-400/80">Online</span>
              </div>
            </div>
            {onClose && (
              <motion.button
                onClick={onClose}
                aria-label="Close chatbot"
                className="text-white/70 hover:text-white transition-colors duration-200 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {/* Greeting Message */}
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Image src={ROKAIBOT} alt="Rockai Bot" width={64} height={64} className="drop-shadow-lg" />
              </motion.div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-sm border border-white/20">
                <p className="text-white text-sm leading-relaxed">
                  Hi there! I'm Rockai, your AI assistant. How can I help you today?
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <AnimatePresence>
              {messages.slice(1).map((msg, idx) => (
                <motion.div
                  key={idx + 1}
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
                    className={`px-4 py-3 rounded-2xl ${msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg max-w-xs sm:max-w-sm"
                      : "bg-white/10 backdrop-blur-sm text-white border border-white/20 max-w-sm sm:max-w-md lg:max-w-lg"
                      }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {msg.sender === "bot" ? (
                      <MessageText text={msg.text} sender={msg.sender} />
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Suggested Action Cards */}
            {showSuggestions && messages.length === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setInput("Boost Your Sales");
                    setTimeout(() => handleSend(), 100);
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold text-sm">Boost Your Sales</h3>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Get actionable insights to level up your sales and maximize growth.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setInput("Product Innovation Tips");
                    setTimeout(() => handleSend(), 100);
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold text-sm">Product Innovation Tips</h3>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Discover strategies to innovate and scale your tech offerings.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    setInput("Custom Help");
                    setTimeout(() => handleSend(), 100);
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold text-sm">Custom Help</h3>
                    <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Share your challenge, and AI will suggest the best solution.
                  </p>
                </motion.div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              </motion.div>
            )}

            {/* Typing indicator */}
            {typing && (
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Image src={ROKAIBOT} alt="bot" width={32} height={32} className="mr-1" />
                <div className="flex gap-1 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/20">
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

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-3 p-4 border-t border-gray-600/30 bg-gray-900/50">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message here..."
                className="w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-all duration-200"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
            </div>
            <motion.button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl cursor-pointer hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
