import { useState } from "react";

function ProgressBox({ title, shortDesc, longDesc, color }) {
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

export default function ProgressPage() {
  const sections = [
    {
      id: 1,
      title: "Progress Dashboard",
      color: "cyan",
      shortDesc: "Track your overall journey with AI-powered insights.",
      longDesc: [
        { title: "Topic Completion", desc: "Visual progress bar for each domain." },
        { title: "AI Recommendations", desc: "Smart suggestions on what to learn next." },
        { title: "Time Tracking", desc: "Monitor learning hours automatically." },
      ],
    },
    {
      id: 2,
      title: "Streaks",
      color: "yellow",
      shortDesc: "Stay consistent with daily learning streaks.",
      longDesc: [
        { title: "Daily Goals", desc: "Set & complete daily coding/reading tasks." },
        { title: "Heatmap Calendar", desc: "Visualize your daily activity like GitHub." },
        { title: "AI Alerts", desc: "Reminders when your streak is about to break." },
      ],
    },
    {
      id: 3,
      title: "Badges & Achievements",
      color: "green",
      shortDesc: "Unlock gamified rewards for every milestone.",
      longDesc: [
        { title: "Skill Badges", desc: "Earn badges for mastering concepts." },
        { title: "Project Trophies", desc: "Complete projects to unlock trophies." },
        { title: "AI-Exclusive Awards", desc: "Special badges given by AI mentor." },
      ],
    },
    {
      id: 4,
      title: "Reminders & Motivation",
      color: "purple",
      shortDesc: "AI mentor keeps you on track with gentle nudges.",
      longDesc: [
        { title: "Smart Notifications", desc: "Get reminded only when it matters." },
        { title: "AI Encouragement", desc: "Motivational nudges when you’re stuck." },
        { title: "Personalized Timings", desc: "Reminders based on your learning patterns." },
      ],
    },
    {
      id: 5,
      title: "AI Mentor Feedback",
      color: "pink",
      shortDesc: "Get personalized insights on your learning style.",
      longDesc: [
        { title: "Skill Gap Analysis", desc: "AI highlights your weak areas." },
        { title: "Learning Path Updates", desc: "Roadmap adapts as you improve." },
        { title: "Weekly Reports", desc: "Receive AI-generated summaries of progress." },
      ],
    },
  ];

  return (
    <> {/* Use React Fragment */}
      <h1 className="text-4xl font-bold text-center mb-10">Progress Tracking</h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sections.map((sec) => (
          <ProgressBox
            key={sec.id}
            title={sec.title}
            shortDesc={sec.shortDesc}
            longDesc={sec.longDesc}
            color={sec.color} // Prop order doesn't strictly matter, but keeping consistent
          />
        ))}
      </div>
    </> // Close React Fragment
  );
}
