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
      <body className={`${inter.className} relative min-h-screen`}>
        <StarsBackgroundDemo />
        <div className={` ${isPropaiPage ? "relative z-10 " : "relative z-10  mx-4 sm:mx-6 lg:mx-16"} `}>
          <Navbar isPropaiPage={isPropaiPage} />
          {children}
          <Footer isPropaiPage={isPropaiPage}/>
        </div>
      </body>
    </html>
  );
}
