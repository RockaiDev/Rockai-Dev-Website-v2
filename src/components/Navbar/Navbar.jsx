"use client";
import Image from "next/image";
import logo from "@/Assets/Images/Logo.png";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar({isPropaiPage}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Join Us", href: "/join-us" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md shadow-lg' 
          : 'bg-[#0f0229]'
      }`}
    >
      <nav 
        className={`${isPropaiPage && "px-10"} w-full py-4 flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-8`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" aria-label="Rockai Dev - Go to home page">
            <Image 
              src={logo} 
              alt="Rockai Dev Logo - AI and Technology Solutions" 
              width={80} 
              height={80} 
              className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]" 
              priority
            />
          </Link>
        </motion.div>

        {/* Links - Tablet/Desktop */}
        <motion.ul 
          className="hidden md:flex items-center md:gap-6 lg:gap-8 text-white md:text-[14px] lg:text-[18px] leading-[30px] font-medium"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              className="relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-cyan-700 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-out"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link 
                href={item.href} 
                className="block cursor-pointer hover:text-cyan-700 py-1 transition-colors duration-300"
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact Button - hide on mobile, show from md */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href={"/Contactus"} aria-label="Contact us for AI and technology solutions">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <ShimmerButton className="hover:[--bg:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_100%),_linear-gradient(180deg,#10DBDB_0%,#0047A5_100%)] [--spark-bg:conic-gradient(from_192deg_at_48.42%_61.76%,rgba(0,0,0,0)_56.773470640182495deg,rgba(0,71,165,0)_260.5844807624817deg,#10DBDB_319.36835289001465deg),_rgba(255,255,255,0.10)] [--spread:160deg] glow-bottom">
                Contact Us
              </ShimmerButton>
            </motion.div>
          </Link>
        </motion.div>

        {/* Hamburger - Mobile Only */}
        <motion.button
          aria-label="Toggle navigation menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white hover:border-white/40 transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">Menu</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.path 
                  key="close"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M6 18L18 6M6 6l12 12"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.path 
                  key="menu"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.svg>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute left-0 top-[72px] z-50 w-full md:hidden backdrop-blur-md bg-[#0e0b31]/95 border-t border-white/10 shadow-lg"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.ul 
                className="flex flex-col gap-4 px-4 py-4 text-white text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.href} 
                    className="border-b border-white/10 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Navigate to ${item.label} page`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link href={"/Contactus"} aria-label="Contact us for AI and technology solutions">
                    <ShimmerButton className="w-full justify-center hover:[--bg:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_100%),_linear-gradient(180deg,#10DBDB_0%,#0047A5_100%)] [--spark-bg:conic-gradient(from_192deg_at_48.42%_61.76%,rgba(0,0,0,0)_56.773470640182495deg,rgba(0,71,165,0)_260.5844807624817deg,#10DBDB_319.36835289001465deg),_rgba(255,255,255,0.10)] [--spread:160deg] glow-bottom">
                      Contact Us
                    </ShimmerButton>
                  </Link>
                </motion.div>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
