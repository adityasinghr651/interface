export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="text-center py-14">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Learn MERN with your <span className="text-blue-600">AI Mentor</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Hinglish ya English—jo comfortable ho—project-based learning ke saath.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#courses"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Start Learning
          </a>
          <a
            href="#features"
            className="rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:bg-gray-50"
          >
            See Features
          </a>
        </div>
      </section>

      {/* Simple features grid */}
      <section id="features" className="grid gap-4 md:grid-cols-3 pb-16">
        <div className="rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold text-lg">Personalized Tutor</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Tumhare pace par explain, examples, assignments—sab personalized.
          </p>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold text-lg">Practice & Projects</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Coding practice + mini projects (To-Do, Blog, E-commerce cart).
          </p>
        </div>
        <div className="rounded-2xl border p-5 shadow-sm">
          <h3 className="font-semibold text-lg">Progress Tracking</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Jahan chhoda tha wahan se continue—progress auto save.
          </p>
        </div>
      </section>

      {/* Placeholder course anchor for buttons */}
      <div id="courses" className="pb-20 text-center text-sm text-gray-500">
        (Course selection yahan aayega — next steps me banayenge)
      </div>
    </main>
  );
}
