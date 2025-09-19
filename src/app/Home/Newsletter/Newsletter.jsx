"use client";
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setSubmitMessage('Please enter your email address.');
      setIsSuccess(false);
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage('Thank you! You have successfully subscribed to our newsletter.');
        setIsSuccess(true);
        setEmail(''); // Clear the input
      } else {
        setSubmitMessage(result.message || 'Failed to subscribe. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('An error occurred. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full  py-10 lg:px-6  flex justify-between border-b border-t border-gray-900">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 ">
        {/* Text Content */}
        <div className="text-left ">
          <h2 className="text-white text-xl text-center md:text-left md:text-2xl font-semibold mb-2">
            Stay Ahead of the Tech Curve
          </h2>
          <p className="text-gray-400 text-base max-w-lg text-center md:text-left">
            Get weekly insights on AI Trends, development tips and exclusive Rockai updates.
          </p>
        </div>

        {/* Input + Button Side by Side */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center w-full md:w-auto items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={isSubmitting}
            className={`flex-1 md:w-72 rounded-full border px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none text-center md:text-left w-full md:w-auto transition-colors duration-300 ${
              isSubmitting 
                ? 'border-gray-600 bg-gray-800/50 cursor-not-allowed' 
                : 'border-gray-700 bg-transparent focus:border-cyan-400'
            }`}
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`sm:px-6 px-12 py-3 text-sm font-medium text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSubmitting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-[#10DBDB] to-[#0047A5] shadow-cyan-500/30 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer hover:-translate-y-1'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Subscribing...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Subscribe</span>
              </>
            )}
          </button>
        </form>
        
        {/* Success/Error Message */}
        {submitMessage && (
          <div className={`w-full md:w-auto mt-4 p-4 rounded-lg text-center flex items-center justify-center space-x-2 ${
            isSuccess 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}>
            {isSuccess ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span>{submitMessage}</span>
          </div>
        )}
      </div>
    </section>
  );
}
