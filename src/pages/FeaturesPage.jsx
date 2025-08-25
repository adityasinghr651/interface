import { useState } from "react";

function ProjectBox({ title, shortDesc, longDesc }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-cyan-400">{title}</h2>

      {/* Short Description */}
      <p className="text-gray-400 mt-3">{shortDesc}</p>

      {/* Read More Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm text-cyan-300 hover:text-cyan-200 transition-colors"
      >
        {open ? "Read Less ▲" : "Read More ▼"}
      </button>

      {/* Expanded Content */}
      {open && (
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">{longDesc}</p>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const sections = [
    {
      id: 1,
      title: "Frontend Projects",
      shortDesc: "Start with HTML, CSS, JavaScript, React, and UI building.",
      longDesc:
        "Frontend projects help you master UI/UX design, responsiveness, and component-based development. Examples include Portfolio Website, To-Do App, Weather App, and Blog UI.",
    },
    {
      id: 2,
      title: "MERN Stack Projects",
      shortDesc: "Full-stack projects with MongoDB, Express, React, and Node.js.",
      longDesc:
        "These projects teach you how to build end-to-end apps like Authentication System, Blog App with DB, E-commerce Platform, and Video Streaming Backend.",
    },
    {
      id: 3,
      title: "DSA Problems",
      shortDesc: "Sharpen your coding & logic with problem solving.",
      longDesc:
        "Practice DSA problems in Arrays, Strings, Recursion, Dynamic Programming, and Graphs. Build problem-solving habits that make you strong for interviews.",
    },
    {
      id: 4,
      title: "AI Integrated Projects",
      shortDesc: "Next-gen projects with AI assistance.",
      longDesc:
        "Build smart apps like Chatbots, AI Tutors, Resume Analyzers, and Recommendation Engines. AI will guide you step by step with explanations and corrections.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Skill-Building Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sections.map((sec) => (
          <ProjectBox
            key={sec.id}
            title={sec.title}
            shortDesc={sec.shortDesc}
            longDesc={sec.longDesc}
          />
        ))}
      </div>
    </div>
  );
}
