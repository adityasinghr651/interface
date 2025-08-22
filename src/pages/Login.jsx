export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Futuristic glowing background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-gray-900/80 p-8 rounded-2xl shadow-2xl w-96 border border-gray-700 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-lg tracking-wide">
          AI Robotics Login
        </h2>

        <form className="space-y-4">
          {/* Email input */}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-500 transition"
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-500 transition"
          />

          {/* Forgot Password */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-teal-400 hover:text-teal-300 transition"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="h-px w-1/3 bg-gray-700"></span>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <span className="h-px w-1/3 bg-gray-700"></span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* GitHub Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5" />
            Continue with GitHub
          </button>

          {/* Sign up button */}
          <button
            type="button"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition"
            onClick={() => (window.location.href = "/signup")}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
