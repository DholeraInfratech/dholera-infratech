"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpenMobile, setSocialOpenMobile] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#c6b776] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 py-1 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/new-logo.jpg"
                alt="Dholera Logo"
                className="h-12 w-12 object-contain drop-shadow-lg"
              />
              <span className="text-xl font-extrabold text-white tracking-wide hover:text-[#ffd200] transition">
                Dholera Infratech
              </span>
            </Link>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="text-white h-7 w-7" />
              ) : (
                <Menu className="text-white h-7 w-7" />
              )}
            </button>
          </div>

          {/* Links Section - Desktop */}
          <div className="hidden md:flex space-x-6 text-white font-medium items-center">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
              { name: "Blogs", link: "/blog" },
              { name: "Gallery", link: "/gallery" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="hover:text-[#ffd200] transition duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Follow Us - Desktop */}
            <div className="relative group">
              <button className="px-3 py-1 border border-white rounded hover:text-[#ffd200] hover:border-[#ffd200] transition duration-200">
                Follow Us
              </button>
              <div className="absolute top-full right-0 mt-2 flex flex-col space-y-1 py-1 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-gray-100">
                <a
                  href="https://facebook.com/profile.php?id=61580534821548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1 hover:bg-[#e8f7ff] transition"
                >
                  <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/dholerainfratechofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1 hover:bg-[#fffbea] transition"
                >
                  <img src="/instagram.png" alt="Instagram" className="h-7 w-7" />
                </a>
                <a
                  href="https://youtube.com/@dholerainfratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1 hover:bg-[#e8f7ff] transition"
                >
                  <img src="/youtube.png" alt="YouTube" className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-4 flex flex-col bg-[#0f2027] text-white font-medium">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
              { name: "Blog", link: "/blog" },
              { name: "Gallery", link: "/gallery" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#ffd200]"
              >
                {item.name}
              </Link>
            ))}

            {/* Follow Us - Mobile */}
            <div className="relative">
              <button
                onClick={() => setSocialOpenMobile(!socialOpenMobile)}
                className="px-3 py-1 border border-gray-400 rounded hover:text-[#ffd200] hover:border-[#ffd200] transition"
              >
                Follow Us
              </button>
              {socialOpenMobile && (
                <div className="flex flex-col space-y-3 mt-2">
                  <a
                    href="https://facebook.com/profile.php?id=61580534821548"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/facebook.png"
                      alt="Facebook"
                      className="h-7 w-7 hover:scale-110 transition"
                    />
                  </a>
                  <a
                    href="https://instagram.com/dholerainfratechofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/instagram.png"
                      alt="Instagram"
                      className="h-8 w-8 hover:scale-110 transition"
                    />
                  </a>
                  <a
                    href="https://youtube.com/@dholerainfratech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/youtube.png"
                      alt="YouTube"
                      className="h-8 w-8 hover:scale-110 transition"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
