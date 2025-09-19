"use client";
import people from "@/Assets/Icons/people.svg";
import sendplaneWhite from "@/Assets/Icons/sendPlaneWhite.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";
import { Upload } from "lucide-react"
import { useState } from "react";

export default function careersForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    skills: '',
    motivation: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

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
      submitData.append('position', formData.position);
      submitData.append('experience', formData.experience);
      submitData.append('availability', formData.availability);
      submitData.append('skills', formData.skills);
      submitData.append('motivation', formData.motivation);
      submitData.append('jobTitle', 'General Application - ' + formData.position);
      
      // Add resume file if selected
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      const response = await fetch('/api/careers-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          availability: '',
          skills: '',
          motivation: '',
          resume: null
        });
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

  return (
    <div className=" flex items-center justify-center  px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-20   w-full justify-between mb-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center gap-6 md:gap-6 max-w-2xl">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md `}
          >
            <Image src={people} alt="send plane Icon" width={20} height={20} />
            Become a Rockai  Member
          </button>
          <div className="content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px]  font-bold gradient-hero-text  text-white mb-3 sm:mb-4 leading-tight md:leading-tight">
              Interested in Rockai ?
            </h1>
            <p className="text-gray-400/80 text-base sm:text-lg max-w-lg ">
              Join Egypt's leading tech innovation company and be part of our mission to revolutionize technology.
            </p>
          </div>
        </div>

        {/* Right Section (Form inside CardWithAnimatedBorder) */}
        <CardWithAnimatedBorder className="rounded-2xl p-[1px] w-full md:w-auto">
          <div className="form-gradient rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full">
            <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 md:p-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Position of interest *</label>
                  <select 
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <option value="" style={{ backgroundColor: '#0e112d', color: 'white' }}>Select Position</option>
                    <option value="frontend" style={{ backgroundColor: '#0e112d', color: 'white' }}>Frontend Developer</option>
                    <option value="backend" style={{ backgroundColor: '#0e112d', color: 'white' }}>Backend Developer</option>
                    <option value="ai" style={{ backgroundColor: '#0e112d', color: 'white' }}>AI Engineer</option>
                    <option value="fullstack" style={{ backgroundColor: '#0e112d', color: 'white' }}>Full-Stack Developer</option>
                    <option value="mobile" style={{ backgroundColor: '#0e112d', color: 'white' }}>Mobile Developer</option>
                    <option value="devops" style={{ backgroundColor: '#0e112d', color: 'white' }}>DevOps Engineer</option>
                    <option value="designer" style={{ backgroundColor: '#0e112d', color: 'white' }}>UI/UX Designer</option>
                    <option value="other" style={{ backgroundColor: '#0e112d', color: 'white' }}>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Experience Level</label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="" style={{ backgroundColor: '#0e112d', color: 'white' }}>Select Experience</option>
                    <option value="junior" style={{ backgroundColor: '#0e112d', color: 'white' }}>Junior (0-2 years)</option>
                    <option value="mid" style={{ backgroundColor: '#0e112d', color: 'white' }}>Mid-level (2-5 years)</option>
                    <option value="senior" style={{ backgroundColor: '#0e112d', color: 'white' }}>Senior (5+ years)</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Availability</label>
                  <select 
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="" style={{ backgroundColor: '#0e112d', color: 'white' }}>Select Availability</option>
                    <option value="fulltime" style={{ backgroundColor: '#0e112d', color: 'white' }}>Full-time</option>
                    <option value="parttime" style={{ backgroundColor: '#0e112d', color: 'white' }}>Part-time</option>
                    <option value="freelance" style={{ backgroundColor: '#0e112d', color: 'white' }}>Freelance</option>
                    <option value="contract" style={{ backgroundColor: '#0e112d', color: 'white' }}>Contract</option>
                  </select>
                </div>
              </div>

              {/* Upload CV */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Upload CV/Resume *</label>
                <div 
                  className="w-full py-10 border-2 border-dashed border-gray-600 rounded-[18px] 
            flex flex-col items-center justify-center text-gray-400 cursor-pointer 
            hover:border-cyan-400 transition"
                  onClick={() => document.getElementById('resume-upload').click()}
                >
                  <Upload className="w-8 h-8 mb-2" />
                  {formData.resume ? (
                    <div className="text-center">
                      <p className="text-white font-medium">{formData.resume.name}</p>
                      <p className="text-xs text-gray-400">
                        {(formData.resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <>
                      <p>Click to upload or drag and drop</p>
                      <p className="text-xs mt-1">PDF, DOC, DOCX (MAX. 5MB)</p>
                    </>
                  )}
                  <input
                    type="file"
                    id="resume-upload"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Skills & Technologies</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="List your technical skills, tools, frameworks, etc..."
                  className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Motivation */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Why do you want to join Rockai?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Tell us what motivates you to join our team..."
                  rows={4}
                  className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                />
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

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg form-btn text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  <>
                    <Image
                      src={sendplaneWhite}
                      alt="send plane Icon"
                      width={20}
                      height={20}
                      className="inline-block mr-2"
                    />
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>
        </CardWithAnimatedBorder>
      </div>
    </div>
  );
}
