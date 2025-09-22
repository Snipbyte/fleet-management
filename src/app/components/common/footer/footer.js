import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black flex items-center justify-center flex-col text-gray-300 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-[1440px]">
        {/* Logo & Contact + Social */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between border-b border-b-[#ffffff20] mb-6 gap-4 md:gap-0">
          {/* Logo + Contact */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between w-full md:w-2/6 gap-4">
            <img src="/images/png/footer-logo.png" className="w-24 sm:w-28" alt="Logo" />
            <div className="flex items-center gap-2">
              <img src="/images/png/phone.png" className="w-4" alt="Phone" />
              <p className="text-sm sm:text-base">+1 XXX XXX XXXX</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <h1 className="font-medium mt-1 w-full text-center md:w-auto md:text-left">
              Follow Us
            </h1>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center"><FaFacebookF /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center"><FaTwitter /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center"><FaInstagram /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-b-[#ffffff20] py-8">
          {/* Company */}
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Our offerings</a></li>
              <li><a href="#" className="hover:text-white">Newsroom</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Gift cards</a></li>
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h2 className="text-white font-semibold mb-4">Top cities</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">New York</a></li>
              <li><a href="#" className="hover:text-white">London</a></li>
              <li><a href="#" className="hover:text-white">Berlin</a></li>
              <li><a href="#" className="hover:text-white">Los Angeles</a></li>
              <li><a href="#" className="hover:text-white">Paris</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-white font-semibold mb-4">Explore</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Intercity rides</a></li>
              <li><a href="#" className="hover:text-white">Limousine service</a></li>
              <li><a href="#" className="hover:text-white">Chauffeur service</a></li>
              <li><a href="#" className="hover:text-white">Private car service</a></li>
              <li><a href="#" className="hover:text-white">Ground transportation</a></li>
              <li><a href="#" className="hover:text-white">Airport transfer</a></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h2 className="text-white font-semibold mb-4">Classes</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Business</a></li>
              <li><a href="#" className="hover:text-white">First</a></li>
              <li><a href="#" className="hover:text-white">XL</a></li>
              <li><a href="#" className="hover:text-white">Assistant</a></li>
            </ul>
          </div>

          {/* Apps */}
          <div className="space-y-3">
            <h2 className="text-white font-semibold mb-4">Download the App</h2>
            <a href="#" className="flex items-center gap-3 border border-gray-500 px-3 py-2 rounded-lg hover:bg-gray-800">
              <FaApple className="text-xl" />
              <div className="border-l-2 border-l-gray-500 pl-3">
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold">Apple Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 border border-gray-500 px-3 py-2 rounded-lg hover:bg-gray-800">
              <FaGooglePlay className="text-xl" />
              <div className="border-l-2 border-l-gray-500 pl-3">
                <p className="text-xs">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row w-full max-w-[1440px] justify-between items-center py-6 text-xs sm:text-sm text-gray-400 gap-4">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-3 w-full md:w-[50%]">
          <p>© 2022 Luxride</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Legal notice</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <button className="px-3 py-2 rounded-full flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a]">
            <img src="/images/png/location-pin.png" className="w-4" alt="Location" />
            <p className="text-sm">New York</p>
          </button>
          <button className="px-3 py-2 rounded-full flex items-center gap-2 text-white bg-[#626262] hover:bg-[#7a7a7a]">
            <img src="/images/png/world.png" className="w-4" alt="World" />
            <p className="text-sm">English</p>
          </button>
        </div>
      </div>
    </footer>
  );
}
