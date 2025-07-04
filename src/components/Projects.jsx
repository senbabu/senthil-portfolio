import React from "react";

const projects = [
  { name: "HTML5 Quiz Apps", desc: "Multilingual quiz platforms and digital flashcards" },
  { name: "Custom E‑Learning Modules", desc: "SCORM‑compliant courses via Storyline & Adobe tools" },
  { name: "LMS Customizations", desc: "Enhanced Moodle/Totara for institutions and publishers" },
  { name: "iOS eDetailers & eMailers", desc: "Device‑optimized presentations for sales teams" }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map(proj => (
          <div key={proj.name} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl">{proj.name}</h3>
            <p className="mt-2 text-gray-700">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
