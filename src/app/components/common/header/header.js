"use client";
import { useState } from "react";
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", dropdown: true },
    { name: "Pages", dropdown: true },
    { name: "Our Fleet", dropdown: true },
    { name: "Services", dropdown: true },
    { name: "Blog", dropdown: true },
    { name: "Contact", dropdown: false },
  ];

  return (
    <header className="w-full bg-black text-white sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/png/logo.png" className="w-1/2" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-3">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-500 text-[14px]">
                {item.name}
                {item.dropdown && <FiChevronDown size={16} className="mt-1" />}
              </button>
              {/* Example Dropdown */}
              {item.dropdown && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg py-2 w-40">
                  <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                    Option 1
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-100" href="#">
                    Option 2
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center gap-2 text-sm">
            <FiPhone /> +41 22 716 9000
          </div>
          <div className="flex items-center gap-1">
            <img src="/images/png/world.png" className="w-4" />
            <span className="text-sm">EN</span>
          </div>
          <Link href={"/sign-in"}>
            <button className="px-4 py-1.5 bg-[#626262] rounded-full">
              Log In
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="px-4 py-1.5 rounded-full bg-white text-black hover:bg-gray-200">
              Sign Up
            </button>
          </Link>
          <Link href={"/"}>
            <img src="/images/png/menu.png" className="w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-700 pb-2">
              <button className="flex items-center justify-between w-full">
                {item.name}
                {item.dropdown && <FaChevronDown size={12} />}
              </button>
            </div>
          ))}
          <div className="space-y-2 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <FiPhone /> +41 22 716 9000
            </div>
            <span className="block">EN</span>
            <button className="w-full py-2 rounded-md bg-gray-800 hover:bg-gray-700">
              Log In
            </button>
            <button className="w-full py-2 rounded-md bg-white text-black hover:bg-gray-200">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
