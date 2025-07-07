import React from "react";

export default function Hero() {
  return (
    <header
      className="relative h-96 bg-cover bg-center bg-linear-90"
      style={{ backgroundImage: "url('/images/topbanner.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-transparent" />
      <div className="relative h-full flex items-center justify-between max-w-6xl mx-auto px-6">
        <div>
          <h1 className="text-5xl font-bold text-white">Senthil Babu K S</h1>
          <p className="mt-2 text-lg text-white">Multimedia Programmer | E‑Learning Specialist</p>
        </div>
        <nav className="space-x-6 hidden sm:block">
          {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="text-white font-medium hover:text-persian_green transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
