"use client";
import React, { useState } from "react";
import Image from "next/image";
import jobs from "@/Assets/Icons/jobs.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import arrowRight from "@/Assets/Icons/arrowRight.svg";

const jobsData = [
  {
    id: 1,
    category: "Engineering",
    type: "Full-time",
    experience: "5+ years",
    title: "Senior Full-Stack Developer",
    description:
      "Lead development of cutting-edge web applications using React, Node.js, and cloud technologies.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expert in React, Node.js, TypeScript",
      "Strong problem-solving skills",
    ],
  },
  {
    id: 2,
    category: "Engineering",
    type: "Full-time",
    experience: "5+ years",
    title: "Senior Frontend Developer",
    description:
      "Work on building high-performance UIs with React and modern frontend technologies.",
    requirements: [
      "5+ years of frontend development experience",
      "Expert in React, Next.js, TypeScript",
      "Good eye for design and UX",
    ],
  },
  {
    id: 3,
    category: "Engineering",
    type: "Full-time",
    experience: "3+ years",
    title: "Backend Developer",
    description:
      "Design and build scalable backend services with Node.js and cloud platforms.",
    requirements: [
      "3+ years of backend development experience",
      "Expert in Node.js, Express, MongoDB",
      "Understanding of cloud deployment",
    ],
  },
];

export default function CareersOppotunity() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header */}
      <div className="secHeader mb-1 mx-auto text-center pt-10 px-6">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md m-auto">
          <Image src={jobs} alt="jobs icon " width={20} height={20} />
          We're Hiring
        </button>

        <h2 className="mt-4 text-[62px] font-bold gradient-hero-text">
          Open Positions
        </h2>
        <p className="mt-2 text-xl text-gray-400/80 max-w-2xl mx-auto">
          Join our team and help build the future of technology in Egypt and
          the Middle East.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
        {jobsData.map((job) => (
          <CardWithAnimatedBorder key={job.id}>
            <div className="rounded-xl py-6 px-6 bg-gradient-to-b from-blue-950/60 to-blue-900/30 h-full flex flex-col justify-between border border-gray-800/50">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <span className="text-sm text-sky-400/80 font-medium mt-3 block bg-sky-500/10 px-4 py-1 rounded-full">
                  {job.category}
                </span>
                <span className="text-sm text-sky-400/80 font-medium mt-3 block bg-sky-500/10 px-4 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="text-sm text-sky-400/80 font-medium mt-3 block bg-sky-500/10 px-4 py-1 rounded-full">
                  {job.experience}
                </span>
              </div>

              {/* Title + Desc */}
              <h3 className="text-2xl font-bold gradient-hero-text mb-2">
                {job.title}
              </h3>
              <p className="text-gray-400/80 text-md mb-6 max-w-sm">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sky-400/80">
                  Requirements:
                </h4>
                <ul className="list-disc list-inside text-gray-400/80 text-sm space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                onClick={() => openModal(job)}
                className="px-6 py-4 flex rounded-full bg-sky-500 text-white text-md items-center justify-center hover:bg-sky-600 transition cursor-pointer"
              >
                Apply Now
                <Image src={arrowRight} alt="arrow" className="w-5 h-5 ml-2" />
              </button>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 grayscale-[35%]" >
          <div className="relative card-gradient rounded-2xl shadow-lg w-full max-w-2xl mx-auto p-6 text-white">
            {/* Close Btn */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Form */}
            <h2 className="text-2xl font-bold mb-4">
              {selectedJob?.title}
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    className=" border border-gray-700 bg-blue-950/40  rounded-lg px-4 py-3 w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Years of Experience
                  </label>
                  <select className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none text-gray-400">
                    <option value="">Select Experience</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">
                  Portfolio / LinkedIn URL
                </label>
                <input
                  type="url"
                  className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">
                  Cover Letter
                </label>
                <textarea
                  rows="4"
                  className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Upload CV / Resume *
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center cursor-pointer">
                  <input type="file" className="hidden" id="resume" />
                  <label htmlFor="resume" className="cursor-pointer">
                    Click to upload or drag and drop <br />
                    <span className="text-gray-500 text-sm">
                      PDF, DOC, DOCX (max. 5MB)
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-full"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
