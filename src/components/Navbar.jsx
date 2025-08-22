import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-teal-300">
      <div className="mx-auto max-w-7xl px-4 border-b border-gray-700">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-extrabold text-xl tracking-wide text-white hover:text-teal-400 transition duration-300"
          >
            AI Tutor
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a
                className="font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out 
                           relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                           after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                href="#features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out 
                           relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                           after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
                href="#courses"
              >
                Courses
              </a>
            </li>
            
<li>
  <Link
    to="/login"
    className="font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out 
               relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
               after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full"
  >
    Login
  </Link>
</li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col items-center justify-center rounded-lg p-2 hover:bg-gray-700 transition duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 my-1 ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-screen opacity-100 border-t border-gray-700"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-3 space-y-2 text-sm">
          <li>
            <a
              className="block py-2 font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out"
              href="#features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="block py-2 font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out"
              href="#courses"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="block py-2 font-bold text-gray-400 hover:text-white transition duration-300 ease-in-out"
              href="#login"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
