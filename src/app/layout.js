"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground";
import Footer from "@/components/Footer/Footer";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const pathname = usePathname();


  const isPropaiPage = pathname.includes("/propai");
  return (
    <html lang="en">
      <head>
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
      </head>
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
