import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHeart } from "react-icons/fi";

const pages = [
  { label: "Home", path: "/" },
  { label: "Chapter I", path: "/chapter-1" },
  { label: "Chapter II", path: "/chapter-2" },
  { label: "Chapter III", path: "/chapter-3" },
  { label: "Chapter IV", path: "/chapter-4" },
  { label: "Love Letter", path: "/letter" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-rose-400 heartbeat">
            <FiHeart size={18} fill="currentColor" />
          </span>
          <span
            className="font-script text-2xl"
            style={{ color: "#c9748f" }}
          >
            Our Story
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className={`nav-link text-sm tracking-wide font-light transition-colors ${
                pathname === p.path
                  ? "text-rose-500 active"
                  : "text-gray-500 hover:text-rose-400"
              }`}
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
            >
              {p.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-rose-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-rose-100 px-6 py-4 space-y-4">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              onClick={() => setOpen(false)}
              className={`block text-base ${
                pathname === p.path ? "text-rose-500" : "text-gray-500"
              }`}
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
            >
              {p.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
