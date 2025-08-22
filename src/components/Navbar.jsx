import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-extrabold text-xl tracking-wide">
            AI Tutor
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a className="hover:underline" href="#features">Features</a></li>
            <li><a className="hover:underline" href="#courses">Courses</a></li>
            <li><a className="hover:underline" href="#login">Login</a></li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-blue-500/40"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {/* simple hamburger */}
            <span className="block h-0.5 w-5 bg-white mb-1"></span>
            <span className="block h-0.5 w-5 bg-white mb-1"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/20">
          <ul className="px-4 py-3 space-y-2 text-sm">
            <li><a className="block py-1" href="#features">Features</a></li>
            <li><a className="block py-1" href="#courses">Courses</a></li>
            <li><a className="block py-1" href="#login">Login</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
