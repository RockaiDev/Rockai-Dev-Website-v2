"use client";
import people from "@/Assets/Icons/people.svg";
import sendplaneWhite from "@/Assets/Icons/sendPlaneWhite.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";
import { Upload } from "lucide-react"
import { useState } from "react";

export default function PartnersForm() {
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    organizationName: '',
    website: '',
    partnershipType: '',
    industry: '',
    proposal: '',
    motivation: '',
    documents: null
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
      submitData.append('contactName', formData.contactName);
      submitData.append('email', formData.email);
      submitData.append('organizationName', formData.organizationName);
      submitData.append('website', formData.website);
      submitData.append('partnershipType', formData.partnershipType);
      submitData.append('industry', formData.industry);
      submitData.append('proposal', formData.proposal);
      submitData.append('motivation', formData.motivation);
      
      // Add documents file if selected
      if (formData.documents) {
        submitData.append('documents', formData.documents);
      }

      const response = await fetch('/api/partnership-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          contactName: '',
          email: '',
          organizationName: '',
          website: '',
          partnershipType: '',
          industry: '',
          proposal: '',
          motivation: '',
          documents: null
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
    <div className=" flex items-center justify-center  px-4 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-20   w-full justify-between mb-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center gap-6 md:gap-6 max-w-2xl">
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30  font-bold text-cyan-700   text-md `}
          >
            <Image src={people} alt="send plane Icon" width={20} height={20} />
            Become a Rockai  Partner
          </button>
          <div className="content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px]  font-bold gradient-hero-text  text-white mb-3 sm:mb-4 leading-tight md:leading-tight">
              Apply for Partnership
            </h1>
            <p className="text-gray-400/80 text-base sm:text-lg max-w-xl ">
              Ready to explore a partnership opportunity? Tell us about your organization and how we can work together.
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
                  <label className="mb-2 text-sm text-gray-300">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
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
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Organization Name *</label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your organization name"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
                placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Partnership Type *</label>
                  <select 
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="" style={{ backgroundColor: '#0e112d', color: 'white' }}>Select Partnership Type</option>
                    <option value="technology" style={{ backgroundColor: '#0e112d', color: 'white' }}>Technology Partners</option>
                    <option value="academic" style={{ backgroundColor: '#0e112d', color: 'white' }}>Academic Partners</option>
                    <option value="reseller" style={{ backgroundColor: '#0e112d', color: 'white' }}>Reseller Partners</option>
                    <option value="strategic" style={{ backgroundColor: '#0e112d', color: 'white' }}>Strategic Partners</option>
                    <option value="other" style={{ backgroundColor: '#0e112d', color: 'white' }}>Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Industry</label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Enter your industry"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
              {/* Partnership Proposal */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Partnership Proposal *</label>
                <textarea
                  name="proposal"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your partnership proposal..."
                  rows={4}
                  className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white 
              placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>


              {/* Upload Documents */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Supporting Documents ( Optional )</label>
                <div 
                  className="w-full py-10 border-2 border-dashed border-gray-600 rounded-[18px] 
            flex flex-col items-center justify-center text-gray-400 cursor-pointer 
            hover:border-cyan-400 transition"
                  onClick={() => document.getElementById('documents-upload').click()}
                >
                  <Upload className="w-8 h-8 mb-2" />
                  {formData.documents ? (
                    <div className="text-center">
                      <p className="text-white font-medium">{formData.documents.name}</p>
                      <p className="text-xs text-gray-400">
                        {(formData.documents.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <>
                      <p>Click to upload company profile, proposal, other documents</p>
                      <p className="text-xs mt-1">PDF, DOC, DOCX (MAX. 5MB)</p>
                    </>
                  )}
                  <input
                    type="file"
                    id="documents-upload"
                    name="documents"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleInputChange}
                  />
                </div>
              </div>


              {/* Motivation */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Why do you want to partner with Rockai?</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Tell us what motivates you to partner with us..."
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
                    Partnership application submitted successfully! We'll get back to you soon.
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
