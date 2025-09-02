"use client";
import Image from "next/image";
import logo from "@/Assets/Images/Logo.png";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Join Us", href: "/join-us" },
  ];

  return (
    <nav className="w-full py-4 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" aria-label="Go to home">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </Link>
      </div>

      {/* Links - Tablet/Desktop */}
      <ul className="hidden md:flex items-center md:gap-6 lg:gap-8 text-white md:text-[18px] lg:text-[20px] leading-[30px] font-medium">
        {navItems.map((item) => (
          <li
            key={item.href}
            className="relative transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-cyan-700 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-out"
          >
            <Link href={item.href} className="block cursor-pointer hover:text-cyan-700 py-1">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Contact Button - hide on mobile, show from md */}
      <div className="hidden md:block">
        <ShimmerButton className="hover:[--bg:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_100%),_linear-gradient(180deg,#10DBDB_0%,#0047A5_100%)] [--spark-bg:conic-gradient(from_192deg_at_48.42%_61.76%,rgba(0,0,0,0)_56.773470640182495deg,rgba(0,71,165,0)_260.5844807624817deg,#10DBDB_319.36835289001465deg),_rgba(255,255,255,0.10)] [--spread:160deg] glow-bottom">Contact Us</ShimmerButton>
      </div>

      {/* Hamburger - Mobile Only */}
      <button
        aria-label="Toggle navigation menu"
        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 text-white"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-[72px] z-50 w-full md:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
          <ul className="flex flex-col gap-4 px-4 py-4 text-white text-base">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-white/10 last:border-b-0">
                <Link
                  href={item.href}
                  className="block py-2 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ShimmerButton className="w-full justify-center hover:[--bg:radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0)_100%),_linear-gradient(180deg,#10DBDB_0%,#0047A5_100%)] [--spark-bg:conic-gradient(from_192deg_at_48.42%_61.76%,rgba(0,0,0,0)_56.773470640182495deg,rgba(0,71,165,0)_260.5844807624817deg,#10DBDB_319.36835289001465deg),_rgba(255,255,255,0.10)] [--spread:160deg] glow-bottom">Contact Us</ShimmerButton>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}
