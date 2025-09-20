"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground";
import Footer from "@/components/Footer/Footer";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPropaiPage = pathname.includes("/propai");

  return (
    <html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <title>Rockai Dev - AI-Powered Solutions & Development Services</title>
        <meta name="description" content="Rockai Dev specializes in AI-powered solutions, custom software development, and innovative technology services. Transform your business with our cutting-edge AI tools and expert development team." />
        <meta name="keywords" content="AI solutions, software development, artificial intelligence, custom software, web development, mobile apps, PropAI, AttendAI, POS systems, chatbot development" />
        <meta name="author" content="Rockai Dev" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rockai Dev - AI-Powered Solutions & Development Services" />
        <meta property="og:description" content="Transform your business with our cutting-edge AI tools and expert development team. Specializing in AI solutions, custom software development, and innovative technology services." />
        <meta property="og:image" content="/Logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://rockaidev.com" />
        <meta property="og:site_name" content="Rockai Dev" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rockai Dev - AI-Powered Solutions & Development Services" />
        <meta name="twitter:description" content="Transform your business with our cutting-edge AI tools and expert development team. Specializing in AI solutions, custom software development, and innovative technology services." />
        <meta name="twitter:image" content="/Logo.png" />
        <meta name="twitter:site" content="@rockaidev" />
        <meta name="twitter:creator" content="@rockaidev" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* Status Bar and Theme Color Meta Tags */}
        <meta name="theme-color" content="#0f0229" />
        <meta name="msapplication-navbutton-color" content="#0f0229" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Additional PWA Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Rockai Dev" />
        <meta name="application-name" content="Rockai Dev" />

        {/* Viewport Meta Tag for Better Mobile Experience */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rockai Dev",
              "description": "AI-powered solutions and custom software development services",
              "url": "https://rockaidev.com",
              "logo": "https://rockaidev.com/Logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/rockaidev",
                "https://twitter.com/rockaidev"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "foundingDate": "2024",
              "industry": "Software Development",
              "services": [
                "AI Solutions",
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "PropAI",
                "AttendAI",
                "POS Systems",
                "Chatbot Development"
              ]
            })
          }}
        />
      </Head>
      <body className={`${inter.className} relative min-h-screen`}>
        <StarsBackgroundDemo />
        <div className={` ${isPropaiPage ? "relative z-10 " : "relative z-10  mx-4 sm:mx-6 lg:mx-16"} `}>
          <Navbar isPropaiPage={isPropaiPage} />
          {children}
          <Footer isPropaiPage={isPropaiPage} />
        </div>
      </body>
    </html>
  );
}
