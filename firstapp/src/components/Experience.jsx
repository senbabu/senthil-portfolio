'use client'
import React from "react";

const positions = [
  {
    title: "Associate Team Lead",
    company: "Hogarth",
    period: "2021–Present",
    details: "Leading development of eMailers and iOS eDetailers using cutting‑edge web tech and cloud."
  },
  {
    title: "Senior Developer",
    company: "Williams Lea Tag",
    period: "2019–2021",
    details: "Delivered robust web and multimedia solutions, collaborating with cross‑functional teams."
  },
  {
    title: "Lead Multimedia Programming",
    company: "Ingegno Transmedia",
    period: "2015–2019",
    details: "Created interactive HTML5 learning apps and LMS customizations."
  },
  {
    title: "Media Developer",
    company: "Various Roles",
    period: "2002–2015",
    details: "Built strong foundation in Flash, multimedia programming, and e‑learning content."
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-semibold mb-6 bg-">Professional Experience</h2>
      <div className="space-y-8">
        {positions.map(pos => (
          <div key={pos.title} className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold">
              {pos.title} – <span className="italic">{pos.company}</span> <span className="text-gray-600">({pos.period})</span>
            </p>
            <p className="text-gray-700">{pos.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
