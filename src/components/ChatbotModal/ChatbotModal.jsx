"use client";
import React, { useState } from "react";
import Image from "next/image";
import ROKAIBOT from "@/Assets/Images/ROKAIBOT.svg";

export default function ChatbotModal({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm Rockai, your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

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
      const response = "Hello! How can I help you today?";  
      const newMessage = { sender: "bot", text: response };
      setMessages((prev) => [...prev, newMessage]);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal panel */}
      <div className="relative w-[92vw] max-w-5xl h-[82vh] bg-[#060110] chatBot -gradient text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-700 relative">
          <Image src={ROKAIBOT} alt="Rockai Bot" width={40} height={40} />
          <div>
            <h2 className="font-semibold">Rockai Bot</h2>
            <span className="text-xs text-green-400">Online</span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close chatbot"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto h-80">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "bot" && (
              <Image src={ROKAIBOT} alt="bot" width={30} height={30} className="mr-2" />
            )}
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white"
                  : "bg-[#1b2233] text-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <div className="flex items-center gap-2">
            <Image src={ROKAIBOT} alt="bot" width={30} height={30} />
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
            </div>
          </div>
        )}
      </div>

        {/* Input */}
        <div className="flex items-center border-t border-gray-700 p-3">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-1 bg-transparent outline-none px-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
