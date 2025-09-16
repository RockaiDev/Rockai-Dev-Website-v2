"use client";
import React, { useState } from 'react';
import { Mail, Users, Wrench, Briefcase, Send, User } from 'lucide-react';
import contactLocation from "@/Assets/Icons/contactLocation.svg";
import msgIcon from "@/Assets/Icons/msgIcon.svg";
import mobile from "@/Assets/Icons/mobile.svg";
import Image from 'next/image';


const ContactFormWithOptions = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    organization: '',
    website: '',
    partnershipType: '',
    industry: '',
    proposal: ''
  });
  
  // Array of options with placeholder icons
  // const helpOptions = [
  //   {
  //     id: 'general',
  //     title: 'General Inquiry',
  //     icon: Mail,
  //     description: 'General questions and inquiries'
  //   },
  //   {
  //     id: 'sales',
  //     title: 'Sales & Partnerships',
  //     icon: Users,
  //     description: 'Business partnerships and sales'
  //   },
  //   {
  //     id: 'technical',
  //     title: 'Technical Support',
  //     icon: Wrench,
  //     description: 'Technical help and support'
  //   },
  //   {
  //     id: 'careers',
  //     title: 'Careers',
  //     icon: Briefcase,
  //     description: 'Job opportunities and careers'
  //   }
  // ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-20 w-full justify-between mb-10">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center gap-6 md:gap-6 max-w-2xl">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-md">
            <User size={20} />
           Connect with Rockai 
          </button>
          <div className="content">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold gradient-hero-text mb-6">
        Get in Touch
            </h1>
            <p className="text-gray-400/80 text-base sm:text-lg max-w-xl ">
            We’re eager to hear from organizations interested in collaboration. Share your vision and let’s explore how we can create success together.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-8 ">

        <div className="flex justify-center ">
            <Image src={contactLocation} alt="send plane Icon" width={56} height={56} className='me-4' />
            <div className='flex flex-col '>
                <p className='text-gray-400 mb-2 text-[12px]'>Location</p>
                <p className='text-cyan-400'>Smouha, Alex Governorate Egypt, 11835</p>
            </div>
        </div>
        <div className="flex justify-center ">
            <Image src={msgIcon} alt="send plane Icon" width={56} height={56} className='me-4' />
            <div className='flex flex-col '>
                <p className='text-gray-400 mb-2 text-[12px]'>Email Address</p>
                <p className='text-cyan-400'>info@rockaidev.com</p>
            </div>
        </div>
        <div className="flex justify-center ">
            <Image src={mobile} alt="send plane Icon" width={56} height={56} className='me-4' />
            <div className='flex flex-col '>
                <p className='text-gray-400 mb-2 text-[12px]'>Phone Number</p>
                <p className='text-cyan-400'>+201097122246</p>
            </div>
        </div>




          </div>

          {/* Options Grid */}
          
        </div>

        {/* Right Section (Form) */}
        <div className="relative rounded-2xl p-[1px] w-full md:w-auto bg-gradient-to-r ">
          <div className="form-gradient rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full backdrop-blur-sm">
            <div className="space-y-6 p-4 sm:p-6 md:p-10">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
            {helpOptions.map((option) => {
              const IconComponent = option.icon;
              const isSelected = selectedOption === option.id;
              
              return (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`
                    relative p-4 rounded-2xl cursor-pointer transition-all duration-300
                    ${isSelected 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400' 
                      : 'bg-slate-800/50 border-2 border-slate-700/50 hover:border-slate-600'
                    }
                    backdrop-blur-sm group
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      p-2 rounded-xl transition-colors duration-300
                      ${isSelected 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'bg-slate-700/50 text-slate-400 group-hover:text-slate-300'
                      }
                    `}>
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h3 className={`
                        font-semibold text-sm transition-colors duration-300
                        ${isSelected ? 'text-cyan-400' : 'text-white'}
                      `}>
                        {option.title}
                      </h3>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="absolute top-2 right-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div> */}
              {/* Row 1: Contact Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Row 2: Organization & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Company/Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => handleInputChange('organization', e.target.value)}
                    placeholder="Enter your organization name"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 text-sm text-gray-300">Subject *</label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="Brief subject line"
                    className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Partnership Proposal */}
              <div className="flex flex-col">
                <label className="mb-2 text-sm text-gray-300">Message *</label>
                <textarea
                  rows={4}
                  value={formData.proposal}
                  onChange={(e) => handleInputChange('proposal', e.target.value)}
                  placeholder="Tell us about your project, goals and any specific requirements..."
                  className="w-full py-4 px-3 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Application</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWithOptions;