"use client";
import React, { useState } from "react";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";

export default function RateUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="text-center">
 
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-900/30 font-bold mb-8 text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-600 hover:to-blue-700 text-md sm:text-md m-auto px-10 py-3 rounded-4xl hover:bg-blue-900/50 transition-colors duration-300"
      >
        Rate Us
      </button>

     
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 px-4 backdrop-blur-md  ">
          <CardWithAnimatedBorder>
            <div className="bg-[#0e112d]/90 xl:w-[900px] sm:w-[600px] w-fit  rounded-2xl shadow-xl p-6 relative ">
       
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-4 text-gray-300 hover:text-white text-lg cursor-pointer"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-cyan-700 mb-6 text-center">
                Rate Us
              </h2>

             
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`cursor-pointer text-3xl transition-colors ${
                      star <= rating ? "text-cyan-400" : "text-gray-500"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <form className="space-y-4">
                <div className="text-left">
                  <label className="block text-sm font-medium text-cyan-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border rounded-lg text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-cyan-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full px-3 py-2 border rounded-lg text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-cyan-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-3 py-2 border rounded-lg text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-sm font-medium text-cyan-700 mb-1">
                    Feedback Message
                  </label>
                  <textarea
                    placeholder="Write your feedback message"
                    className="w-full px-3 py-2 border rounded-lg text-sm text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700"
                    rows="4"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900/30 font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-600 hover:to-blue-700 text-base py-2 rounded-lg hover:bg-blue-900/50 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </CardWithAnimatedBorder>
        </div>
      )}
    </div>
  );
}
