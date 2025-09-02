import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        <StarsBackgroundDemo />
        <div className="relative z-10 mx-16">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
