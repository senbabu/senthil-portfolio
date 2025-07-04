import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-inter">
      <Hero />
      <div className="max-w-4xl mx-auto px-4 space-y-24 py-12">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
