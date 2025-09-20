"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isPropaiPage = pathname.includes("/propai");

  return (
    <div className={` ${isPropaiPage ? "relative z-10 " : "relative z-10  mx-4 sm:mx-6 lg:mx-16"} `}>
      <Navbar isPropaiPage={isPropaiPage} />
      {children}
      <Footer isPropaiPage={isPropaiPage} />
    </div>
  );
}
