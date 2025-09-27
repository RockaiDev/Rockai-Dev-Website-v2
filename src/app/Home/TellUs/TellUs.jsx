"use client";
import sendplane from "@/Assets/Icons/send-plane.svg";
import { CardWithAnimatedBorder } from "@/components/CardWithAnimatedBorder/CardWithAnimatedBorder";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Tellus() {
  // Form state
  const [formData, setFormData] = useState({
    contactName: "",
    phone: "",
    email: "",
    organization: "",
    subject: "",
    jobTitle: "",
    proposal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.contactName.trim()) {
      setSubmitMessage("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitMessage("Please enter your phone number.");
      return;
    }
    if (!formData.proposal.trim()) {
      setSubmitMessage("Please enter your message.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage(
          "Thank you! Your message has been sent successfully."
        );
        // Reset form
        setFormData({
          contactName: "",
          phone: "",
          email: "",
          organization: "",
          subject: "",
          jobTitle: "",
          proposal: "",
        });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-40" id="freeconsultation">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 xl:gap-20 w-full justify-between mb-10 max-w-7xl">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-start justify-center gap-6 lg:gap-8 max-w-3xl w-full lg:w-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 font-bold text-cyan-700 text-sm sm:text-md hover:bg-blue-900/50 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={sendplane}
              alt="send plane Icon"
              width={20}
              height={20}
            />
            Need a custom solution ?
          </motion.button>

          <motion.div className="content" variants={itemVariants}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[40px] font-bold gradient-hero-text text-white mb-3 sm:mb-4 leading-tight">
              Book Your Free Consultation
            </h1>
            <p className="text-gray-400/80 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
              Your goals drive innovation. Tell us what you're aiming for, and
              our AI-powered experts will craft a future-ready solution.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Section (Form inside CardWithAnimatedBorder) */}
        <motion.div
          className="w-full lg:w-auto lg:max-w-lg"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <CardWithAnimatedBorder className="rounded-2xl p-[1px] w-full">
            <div className="form-gradient rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg w-full">
              <motion.form
                className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                onSubmit={handleSubmit}
              >
                {/* Row 1: Contact Name & Phone */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange("contactName", e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">
                      Phone Number *
                    </label>
                    <motion.input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Row 2: Email & Company/Organization */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">Email</label>
                    <motion.input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your@email.com"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">
                      Company/Organization
                    </label>
                    <motion.input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        handleInputChange("organization", e.target.value)
                      }
                      placeholder="Enter your organization name"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Row 3: Subject & Job Title */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  variants={containerVariants}
                >
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">
                      Subject *
                    </label>
                    <motion.input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="Brief subject line"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div className="flex flex-col" variants={inputVariants}>
                    <label className="mb-2 text-sm text-gray-300">
                      Job Title
                    </label>
                    <motion.input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        handleInputChange("jobTitle", e.target.value)
                      }
                      placeholder="Enter your job title"
                      className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 text-sm sm:text-base"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Message */}
                <motion.div className="flex flex-col" variants={inputVariants}>
                  <label className="mb-2 text-sm text-gray-300">Message *</label>
                  <motion.textarea
                    value={formData.proposal}
                    onChange={(e) =>
                      handleInputChange("proposal", e.target.value)
                    }
                    placeholder="Tell us about your vision and your current situation..."
                    rows={4}
                    className="w-full py-3 sm:py-4 px-3 sm:px-4 rounded-[18px] bg-transparent border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none text-sm sm:text-base"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    className={`p-4 rounded-lg text-center ${
                      submitMessage.includes("successfully")
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                    variants={inputVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full cursor-pointer py-3 sm:py-4 rounded-lg font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "form-btn text-white hover:opacity-90"
                  }`}
                  variants={inputVariants}
                  whileHover={
                    !isSubmitting
                      ? {
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                        }
                      : {}
                  }
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <Send size={20} />
                  <span>
                    {isSubmitting ? "Sending..." : "Book Your Free Consultation"}
                  </span>
                </motion.button>
              </motion.form>
            </div>
          </CardWithAnimatedBorder>
        </motion.div>
      </div>
    </div>
  );
}
