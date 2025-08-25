import { Link } from "react-router-dom";

export default function Home({ onSeeFeaturesClick }) {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="text-center py-14 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Learn with your <span className="text-5xl font-extrabold text-amber-700 drop-shadow-[2px_2px_6px_rgba(150,100,50,0.8)]">
  AI Mentor
</span>

        </h1>
        <p className="mt-4 text-gray-400 text-lg">
        “Learn in English or Hinglish — with project-based learning.”
        </p>

        <div className="mt-8 flex justify-center gap-3">
  {/* Primary Button - Black background, White text */}
  <a
    href="#courses"
    className="rounded-xl bg-black px-5 py-3 font-semibold text-white border border-gray-700 
               hover:bg-gray-200 hover:text-black transition-colors duration-300 shadow-md"
  >
    Start Learning
  </a>

  {/* Secondary Button - White background, Black text */}
  <a
    href="#features"
    className="rounded-xl bg-black px-5 py-3 font-semibold text-white border border-gray-700 
               hover:bg-gray-100 hover:text-black transition-colors duration-300 shadow-md"
  >
    See Features
  </a>

  <Link
  to="/register"
  className="rounded-xl bg-black px-5 py-3 font-semibold text-white border border-gray-700 
             hover:bg-gray-100 hover:text-black transition-colors duration-300 shadow-md"
>
  Student Registration
</Link>

</div>




</section>

{/* 🚀 Futuristic Features Grid */}
<section
  id="features"
  className="grid gap-6 md:grid-cols-3 pb-16 text-gray-200"
>
  {/* Card 1 */}
  <div
    className="group rounded-2xl border border-gray-700 p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 
               hover:from-gray-800 hover:to-gray-900 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,200,255,0.6)]"
  >
    <h3 className="font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
      Your AI Tutor
    </h3>
    <p className="mt-3 text-gray-400 text-sm group-hover:text-gray-200">
      Personalized mentorship that explains concepts, provides examples, and guides you step by step.
    </p>
  </div>

  {/* Card 2 */}
  <Link
  to="/projects"
  className="group rounded-2xl border border-gray-700 p-6 shadow-lg 
             bg-gradient-to-br from-gray-900 to-gray-800 
             hover:from-gray-800 hover:to-gray-900 
             transition-all duration-500 
             hover:shadow-[0_0_20px_rgba(0,255,150,0.6)] block"
>
  <h3 className="font-semibold text-lg text-white group-hover:text-green-300 transition-colors duration-300">
    Practice + Projects
  </h3>
  <p className="mt-3 text-gray-400 text-sm group-hover:text-gray-200">
    Hands-on coding with real-world mini projects to make you industry-ready.
  </p>
</Link>

  {/* Card 3 */}
  <Link
    to="/progress" // Added Link with to prop
    className="group rounded-2xl border border-gray-700 p-6 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800
               hover:from-gray-800 hover:to-gray-900 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,180,0,0.6)] block" // Moved className here
  >
    {/* The original div content is now inside the Link */}
    <div> {/* Keep this inner div if you need it for layout/styling within the Link */}
      <h3 className="font-semibold text-lg text-white group-hover:text-yellow-300 transition-colors duration-300">
        Smart Progress Tracking
      </h3>
      <p className="mt-3 text-gray-400 text-sm group-hover:text-gray-200">
        Resume exactly where you left off with auto-tracked learning progress.
      </p>
    </div>
  </Link> 
</section>


      {/* Placeholder course anchor for buttons */}
      <div id="courses" className="pb-20 text-center text-sm text-gray-500">
        (Course selection will be added here — to be built in the next steps.)
      </div>
    </main>
  );
}
