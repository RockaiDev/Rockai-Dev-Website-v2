
import Image from "next/image";
import logo from "@/Assets/Images/Logo.png";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Logo" width={80} height={80} />
      </div>

      {/* Links */}
  <ul className="hidden md:flex items-center gap-8 text-white text-[20px] leading-[30px] font-medium">
  {["Home", "Our Story", "Services", "Products", "Portfolio", "Blog", "Join Us"].map((item) => (
    <li
      key={item}
      className="relative cursor-pointer hover:text-cyan-700 transition-colors duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-cyan-700 
                 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-out"
    >
      {item}
    </li>
  ))}
</ul>

      {/* Contact Button */}
      <button className="relative px-6 py-2 rounded-2xl text-gray-300 glowing-border bg-[#0F0229]">
        Contact Us
      </button>
    </nav>
  );
}
