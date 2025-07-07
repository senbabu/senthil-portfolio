import React from "react";

const skillGroups = [
  {
    title: "E‑Learning & Multimedia",
    items: ["Adobe Animate", "Photoshop", "Captivate", "Storyline"]
  },
  {
    title: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript", "VueJS", "Bootstrap", "jQuery", "WordPress", "Wix"]
  },
  {
    title: "LMS & Cloud",
    items: ["Moodle", "Totara", "Salesforce", "Veeva Vault", "AWS", "Azure"]
  },
  {
    title: "Other Tech",
    items: ["NodeJS", "ReactJS", "Unity3D", "MySQL", "EPUB3"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <div className="space-y-8">
        {skillGroups.map(group => (
          <div key={group.title}>
            <h3 className="font-semibold text-lg">{group.title}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map(skill => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
