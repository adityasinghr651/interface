// src/pages/ProjectsPage.jsx
import { useState } from "react";

function ProjectBox({ title, shortDesc, longDesc, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all">
      {/* Title */}
      <h2 className={`text-2xl font-semibold text-${color}-400`}>{title}</h2>

      {/* Short Description */}
      <p className="text-gray-400 mt-3">{shortDesc}</p>

      {/* Read More Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`mt-4 text-sm text-${color}-300 hover:text-${color}-200 transition-colors`}
      >
        {open ? "Read Less ▲" : "Read More ▼"}
      </button>

      {/* Expanded Content */}
      {open && (
        <div className="mt-4 text-gray-300 text-sm leading-relaxed space-y-3">
          {Array.isArray(longDesc) ? (
            <ul className="list-disc pl-6 space-y-2">
              {longDesc.map((item, i) => (
                <li key={i}>
                  <span className="font-medium">{item.title}</span> – {item.desc}
                </li>
              ))}
            </ul>
          ) : (
            <p>{longDesc}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const sections = [
    {
      id: 1,
      title: "Frontend Projects",
      color: "cyan",
      shortDesc: "Master UI/UX, responsiveness, and React fundamentals.",
      longDesc: [
        { title: "Portfolio Website", desc: "Responsive personal portfolio showcasing skills." },
        { title: "Weather App", desc: "Real-time weather updates using API." },
        { title: "E-commerce Product Page", desc: "UI with filtering and cart functionality." },
        { title: "Task Manager", desc: "To-do app with create/delete tasks." },
        { title: "Movie Search App", desc: "Search movies using OMDB API." },
      ],
    },
    {
      id: 2,
      title: "MERN Stack Projects",
      color: "green",
      shortDesc: "End-to-end web apps with MongoDB, Express, React, Node.js.",
      longDesc: [
        { title: "Authentication System", desc: "JWT + bcrypt secure login." },
        { title: "Blogging Platform", desc: "CRUD operations with MongoDB." },
        { title: "E-Commerce App", desc: "Cart, checkout, and payments." },
        { title: "Video Hosting Backend", desc: "Upload videos, likes, comments." },
        { title: "Social Media Mini App", desc: "Follow/unfollow, posts, interactions." },
      ],
    },
    {
      id: 3,
      title: "DSA Projects",
      color: "yellow",
      shortDesc: "Sharpen problem solving with real-world simulations.",
      longDesc: [
        { title: "Sorting Visualizer", desc: "Bubble, Merge, Quick sort animations." },
        { title: "Pathfinding Visualizer", desc: "BFS, DFS, A* in real time." },
        { title: "Sudoku Solver", desc: "Backtracking-based solution." },
        { title: "LRU Cache Simulation", desc: "Caching + eviction strategies." },
        { title: "Chess Move Validator", desc: "Graph logic for chess moves." },
      ],
    },
    {
      id: 4,
      title: "AI Integrated Projects",
      color: "purple",
      shortDesc: "Next-gen AI assisted applications.",
      longDesc: [
        { title: "AI Chatbot Tutor", desc: "Instant learning + doubt solving." },
        { title: "Healthcare Symptom Checker", desc: "AI-powered medical suggestions." },
        { title: "Resume Analyzer", desc: "Smart feedback on resumes." },
        { title: "AI Quiz Generator", desc: "Generate quizzes automatically." },
        { title: "AI Debugger Assistant", desc: "Find & explain code bugs." },
      ],
    },
    {
      id: 5,
      title: "DSA Roadmap with AI Mentorship",
      color: "pink",
      shortDesc: "Step-by-step mastery path guided by AI.",
      longDesc: [
        { title: "Phase 1: Foundations", desc: "Arrays, Strings, HashMaps with mini projects." },
        { title: "Phase 2: Core Concepts", desc: "Recursion, Stacks, Queues, LinkedLists." },
        { title: "Phase 3: Advanced Topics", desc: "Dynamic Programming, Trees, Graphs." },
        { title: "Phase 4: Real-World & Competitive", desc: "System Design + Competitive problems." },
      ],
    },
  ];

  return (
 <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Skill-Building Projects</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sections.map((sec) => (
          <ProjectBox
            key={sec.id}
            title={sec.title}
            color={sec.color}
            shortDesc={sec.shortDesc}
            longDesc={sec.longDesc}
          />
        ))}
      </div>
    </div>
 );
}
