import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import './main.jsx';


export default function App() {
  return (
    <div className="font-inter bg-charcoal text-cadee7">
      <Hero className="bg-blend-exclusion" />
      <main className="space-y-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
