// src/components/NavMenu.jsx
'use client'
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "experience", "projects", "education", "contact"];

  return (
    <nav>
      <button
        className="fixed top-6 right-6 z-50 p-2 bg-persian_green text-white rounded-full shadow-lg hover:bg-persian_green/90 transition"
        onClick={() => setOpen(!open)}  >
        {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <div className={`fixed top-0 right-0 h-full bg-charcoal p-8 transition-transform ${open ? "translate-x-0" : "translate-x-full"} z-40`}>
        <ul className="space-y-6 mt-16">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link}`} className="text-persian_green text-2xl hover:underline" onClick={() => setOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

