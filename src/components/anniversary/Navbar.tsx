'use client';

import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHeart } from "react-icons/fi";

const sections = [
  { label: "Home", hash: "#hero" },
  { label: "Chapter I", hash: "#chapter-1" },
  { label: "Chapter II", hash: "#chapter-2" },
  { label: "Chapter III", hash: "#chapter-3" },
  { label: "Chapter IV", hash: "#chapter-4" },
  { label: "Love Letter", hash: "#love-letter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.hash.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (hash: string) => {
    setOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="flex items-center gap-2 group"
        >
          <span className="text-rose-400 heartbeat">
            <FiHeart size={18} fill="currentColor" />
          </span>
          <span
            className="font-script text-2xl"
            style={{ color: "#c9748f" }}
          >
            Our Story
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <button
              key={s.hash}
              onClick={() => handleNav(s.hash)}
              className={`nav-link text-sm tracking-wide font-light transition-colors cursor-pointer bg-transparent border-none ${
                activeSection === s.hash.replace("#", "")
                  ? "text-rose-500 active"
                  : "text-gray-500 hover:text-rose-400"
              }`}
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-rose-400 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-rose-100 px-6 py-4 space-y-4">
          {sections.map((s) => (
            <button
              key={s.hash}
              onClick={() => handleNav(s.hash)}
              className={`block text-base w-full text-left bg-transparent border-none cursor-pointer ${
                activeSection === s.hash.replace("#", "") ? "text-rose-500" : "text-gray-500"
              }`}
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
