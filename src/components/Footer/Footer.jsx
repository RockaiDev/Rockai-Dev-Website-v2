
import React from 'react'
import phone from "@/Assets/Icons/phone.svg"
import msg from "@/Assets/Icons/msg.svg"
import location from "@/Assets/Icons/location.svg"
import fb from "@/Assets/Icons/fb.svg"
import insta from "@/Assets/Icons/insta.svg"
import X from "@/Assets/Icons/X.svg"
import tiktok from "@/Assets/Icons/tiktok.svg"
import logo from "@/Assets/Images/Logo.png";

import Image from "next/image";
import Link from 'next/link'
import Newsletter from '@/app/Home/Newsletter/Newsletter'

export default function Footer() {
  return (
<>
<Newsletter/>
    <footer className=" text-white py-12 px-4 md:px-8">
      <div className="max-w- mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 ">

              <Image src={logo} alt="Logo" width={100} height={100} />
            </div>

            <p className="text-gray-400/80 text-sm leading-relaxed mb-8 max-w-sm">
              We embark on an audacious journey to enrich the digital realm, weaving simplicity and delight for every user, while leaving an indelible Egyptian mark in the realm of artificial intelligence.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-">
              <div className="w-16 h-24  rounded-full flex items-center justify-start cursor-pointer">
                <Image src={fb} alt="Facebook" width={60} height={60} />
              </div>
              <div className="w-16 h-24  rounded-full flex items-center justify-center cursor-pointer">
                <Image src={insta} alt="Instagram" width={60} height={60} />
              </div>
              <div className="w-16 h-24  rounded-full flex items-center justify-center cursor-pointer">
                <Image src={X} alt="X (Twitter)" width={60} height={60} />
              </div>
              <div className="w-16 h-24  rounded-full flex items-center justify-center cursor-pointer">
                <Image src={tiktok} alt="TikTok" width={60} height={60} />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex  justify-end gap-16 ">
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm ">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm ">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3  ">

                  <Image src={phone} alt="Phone" className='w-[25px] h-[25px]' />

                  <span className="text-gray-400/80 text-sm">+201097122246</span>
                </div>
                <div className="flex items-center gap-3">

                  <Image src={msg} alt="Email" className='w-[25px] h-[25px]' />

                  <span className="text-gray-400/80 text-sm">info@rockaidev.com</span>
                </div>
                <div className="flex items-center gap-3">
              
                    <Image src={location} alt="Location"  className='w-[25px] h-[25px]'  />
                 
                  <span className="text-gray-400/80 text-sm">Alex, Egypt</span>
                </div>
              </div>
            </div>

            {/* Legal Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold mb-6 text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Cookies Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400/80 hover:text-cyan-500 transition-colors text-sm">
                    Data Processing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400/80 text-sm text-center md:text-left">
            Copyright©2025{' '}
            <span className="text-cyan-700 font-medium">Rockai Dev</span>
            {' '}| All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

</>
  )
}