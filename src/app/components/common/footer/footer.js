import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black flex items-center justify-center flex-col text-gray-300 px-6 md:px-16 lg:px-24 relative">
      <div className="bg-black w-full max-w-[1440px] text-gray-300 relative">
        {/* Logo & Contact */}
        <div className="flex items-center justify-between border-b border-b-[#ffffff20] mb-4 py-2">
          <div className="flex items-center justify-between w-2/6">
            <img src="/png/footer-logo.png" className="w-3/12" />
            <div className="flex items-center gap-2">
              <img src="/png/phone.png" className="w-4" />
              <p className="">+1 XXX XXX XXXX</p>
            </div>
          </div>
          <div className="flex gap-4">
            <h1 className="font-medium mt-1">Follow Us</h1>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center "><FaFacebookF /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center "><FaTwitter /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center "><FaInstagram /></a>
              <a href="#" className="hover:text-white hover:bg-[#626262] w-8 h-8 rounded-full flex items-center justify-center "><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-b-[#ffffff20] py-8">
          {/* Company */}
          <div>
            <h2 className="text-white font-semibold mb-8">Company</h2>
            <ul className="space-y-2">
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
            <h2 className="text-white font-semibold mb-8">Top cities</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">New York</a></li>
              <li><a href="#" className="hover:text-white">London</a></li>
              <li><a href="#" className="hover:text-white">Berlin</a></li>
              <li><a href="#" className="hover:text-white">Los Angeles</a></li>
              <li><a href="#" className="hover:text-white">Paris</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-white font-semibold mb-8">Explore</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Intercity rides</a></li>
              <li><a href="#" className="hover:text-white">Limousine service</a></li>
              <li><a href="#" className="hover:text-white">Chauffeur service</a></li>
              <li><a href="#" className="hover:text-white">Private car service</a></li>
              <li><a href="#" className="hover:text-white">Ground transportation</a></li>
              <li><a href="#" className="hover:text-white">Airport transfer</a></li>
            </ul>
          </div>

          {/* Classes & Apps */}
          <div>
            <h2 className="text-white font-semibold mb-8">Classes</h2>
            <ul className="space-y-2 mb-6">
              <li><a href="#" className="hover:text-white">Business</a></li>
              <li><a href="#" className="hover:text-white">First</a></li>
              <li><a href="#" className="hover:text-white">XL</a></li>
              <li><a href="#" className="hover:text-white">Assistant</a></li>
            </ul>

          </div>
          <div className="space-y-3">
            <h1 className="font-semibold mb-8">Download the App</h1>
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
      <div className="flex w-full max-w-[1440px] flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400 space-y-1 md:space-y-0">
        <div className="flex items-center justify-between w-[50%]">
          <p>© 2022 Luxride</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Legal notice</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
          </div>
          <div className="flex gap-6">
          <button className="px-3 py-2 rounded-full flex items-center gap-2">
            <img src="/png/location-pin.png" className="w-4" />
            <p>New York</p>
          </button>
          <button className="px-3 py-2 rounded-full flex items-center gap-2 text-white bg-[#626262]">
            <img src="/png/world.png" className="w-4" />
            <p>English</p>
          </button>
          </div>
        </div>
    </footer>
  );
}
