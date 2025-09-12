"use client";
import people from "@/Assets/Icons/people.svg";
import sendplaneWhite from "@/Assets/Icons/sendPlaneWhite.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";
import { Upload } from "lucide-react"
import { useState } from "react";

export default function careersForm() {
    const [file, setFile] = useState(null)
    return (
        <div className=" flex items-center justify-center  px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-20   w-full justify-between mb-10">
                {/* Left Section */}
                <div className="flex flex-col items-start justify-center gap-6 md:gap-6 max-w-2xl">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md `}
                    >
                        <Image src={people} alt="send plane Icon" width={20} height={20} />
                    Become a Rockai Dev Member
                    </button>
           <div className="content">
                     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px]  font-bold gradient-hero-text  text-white mb-3 sm:mb-4 leading-tight md:leading-tight">
                      Interested in Rockai Dev?
                    </h1>
                    <p className="text-gray-400/80 text-base sm:text-lg max-w-lg ">
                    Join Egypt's leading tech innovation company and be part of our mission to revolutionize technology.
                    </p>
           </div>
                </div>

                {/* Right Section (Form inside CardWithAnimatedBorder) */}
                <CardWithAnimatedBorder className="rounded-2xl p-[1px] w-full md:w-auto">
      <div className="form-gradient rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full">
        <form className="space-y-6 p-4 sm:p-6 md:p-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Email *</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Phone Number *</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Position of interest *</label>
              <select className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 
              text-gray-400 focus:outline-none focus:border-cyan-400">
                <option value="">Select Position</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="ai">AI Engineer</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Experience Level</label>
              <select className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 
              text-gray-400 focus:outline-none focus:border-cyan-400">
                <option value="">Select Experience</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid-level</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-gray-300">Availability</label>
              <select className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 
              text-gray-400 focus:outline-none focus:border-cyan-400">
                <option value="">Select Availability</option>
                <option value="fulltime">Full-time</option>
                <option value="parttime">Part-time</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>

          {/* Upload CV */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-300">Upload CV/Resume *</label>
            <div className="w-full py-10 border-2 border-dashed border-gray-600 rounded-[18px] 
            flex flex-col items-center justify-center text-gray-400 cursor-pointer 
            hover:border-cyan-400 transition">
              <Upload className="w-8 h-8 mb-2" />
              {file ? (
                <p className="text-white">{file.name}</p>
              ) : (
                <>
                  <p>Click to upload or drag and drop</p>
                  <p className="text-xs mt-1">PDF, DOC, DOCX (MAX. 5MB)</p>
                </>
              )}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-300">Skills & Technologies</label>
            <input
              type="text"
              placeholder="List your technical skills, tools, frameworks , etc..."
              className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Motivation */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-300">Why do you want to join Rockai?</label>
            <textarea
              placeholder="Tell us what motivates you to join our team..."
              rows={4}
              className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg form-btn text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            <Image
              src={sendplaneWhite}
              alt="send plane Icon"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            Submit Application
          </button>
        </form>
      </div>
    </CardWithAnimatedBorder>
            </div>
        </div>
    );
}
