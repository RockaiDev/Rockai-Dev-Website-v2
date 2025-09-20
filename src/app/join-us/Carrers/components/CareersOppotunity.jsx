"use client";
import React, { useState, useEffect } from "react";
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      portfolio: '',
      coverLetter: '',
      resume: null
    });
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    // Handle file upload with size validation
    if (files && files[0]) {
      const file = files[0];
      const maxSize = 5 * 1024 * 1024; // 5MB
      
      if (file.size > maxSize) {
        setSubmitStatus('error');
        alert('File size must be less than 5MB');
        return;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: file
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('fullName', formData.fullName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('experience', formData.experience);
      submitData.append('portfolio', formData.portfolio);
      submitData.append('coverLetter', formData.coverLetter);
      submitData.append('jobTitle', selectedJob?.title);
      
      // Add resume file if selected
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      const response = await fetch('/api/careers-application', {
        method: 'POST',
        body: submitData, // Don't set Content-Type header, let browser set it with boundary
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Header */}
      <div className="secHeader mb-1 mx-auto text-center pt-6 sm:pt-10 px-4 sm:px-6">
        <button className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md m-auto">
          <Image src={jobs} alt="jobs icon " width={20} height={20} />
          We're Hiring
        </button>

        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-[62px] font-bold gradient-hero-text">
          Open Positions
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-gray-400/80 max-w-2xl mx-auto px-4">
          Join our team and help build the future of technology in Egypt and
          the Middle East.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 py-8 sm:py-12">
        {jobsData.map((job) => (
          <CardWithAnimatedBorder key={job.id}>
            <div className="rounded-xl py-4 sm:py-6 px-4 sm:px-6 bg-gradient-to-b from-blue-950/60 to-blue-900/30 h-full flex flex-col justify-between border border-gray-800/50">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <span className="text-xs sm:text-sm text-sky-400/80 font-medium bg-sky-500/10 px-3 sm:px-4 py-1 rounded-full">
                  {job.category}
                </span>
                <span className="text-xs sm:text-sm text-sky-400/80 font-medium bg-sky-500/10 px-3 sm:px-4 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="text-xs sm:text-sm text-sky-400/80 font-medium bg-sky-500/10 px-3 sm:px-4 py-1 rounded-full">
                  {job.experience}
                </span>
              </div>

              {/* Title + Desc */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-hero-text mb-2">
                {job.title}
              </h3>
              <p className="text-gray-400/80 text-sm sm:text-md mb-4 sm:mb-6">
                {job.description}
              </p>

              {/* Requirements */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold mb-2 text-sky-400/80 text-sm sm:text-base">
                  Requirements:
                </h4>
                <ul className="list-disc list-inside text-gray-400/80 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                onClick={() => openModal(job)}
                className="px-4 sm:px-6 py-3 sm:py-4 cursor-pointer flex rounded-full bg-sky-500 text-white text-sm sm:text-md items-center justify-center hover:bg-sky-600 transition cursor-pointer touch-manipulation"
              >
                Apply Now
                <Image src={arrowRight} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </button>
            </div>
          </CardWithAnimatedBorder>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 grayscale-[35%] p-4 overflow-y-auto">
          <div className="relative bg-[#0e112d]/70 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-2xl mx-auto p-4 sm:p-6 text-white my-4 sm:my-8 max-h-[90vh] overflow-y-auto">
            {/* Close Btn */}
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-white text-2xl z-10 bg-[#0e112d]/50 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>

            {/* Form */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold mb-4 pr-8">
              {selectedJob?.title}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border border-gray-700 bg-blue-950/40 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm text-gray-300">
                    Years of Experience
                  </label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors text-gray-300"
                  >
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
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors"
                  placeholder="https://your-portfolio.com or LinkedIn profile"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-300">
                  Cover Letter
                </label>
                <textarea
                  rows="4"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="bg-blue-950/40 border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-sky-500 transition-colors resize-none"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Upload CV / Resume
                </label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 sm:p-6 text-center cursor-pointer hover:border-sky-500 transition-colors">
                  <input 
                    type="file" 
                    name="resume"
                    onChange={handleInputChange}
                    className="hidden" 
                    id="resume" 
                    accept=".pdf,.doc,.docx" 
                  />
                  <label htmlFor="resume" className="cursor-pointer block">
                    <div className="text-gray-300 mb-2">
                      📄 {formData.resume ? (
                        <div>
                          <div className="font-medium">{formData.resume.name}</div>
                          <div className="text-xs text-gray-400">
                            {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                      ) : 'Click to upload or drag and drop'}
                    </div>
                    <span className="text-gray-500 text-sm">
                      PDF, DOC, DOCX (max. 5MB)
                    </span>
                  </label>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-400 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Application submitted successfully! We'll get back to you soon.
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Failed to submit application. Please try again.
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-500 cursor-pointer hover:bg-sky-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 sm:py-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-[#0e112d]"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
