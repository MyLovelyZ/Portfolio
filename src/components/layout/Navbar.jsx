import { useState } from "react";
import { SITE, NAV_LINKS } from "../../constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white">
          {SITE.name}
          <span className="text-indigo-500">.</span>
        </a>
        
        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}                                                               
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-gray-800 px-6 py-4 md:hidden">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
