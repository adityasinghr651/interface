import { useState } from "react";

export default function StudentRegistration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        studentId: "",
        password: "",
        confirmPassword: "",
        course: "",
        year: "",
        college: "",
        location: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Student Registered:", formData);
        alert("Registration Successful!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950 relative">
            {/* Background overlay with blur */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Registration Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-8 w-full max-w-md border border-gray-700">
                <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
                    Student Registration
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-gray-300 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Student ID */}
                    <div>
                        <label className="block text-gray-300 mb-1">Student ID (University/College)</label>
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            placeholder="Eg: 22CSE1034"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-gray-300 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Course */}
                    <div>
                        <label className="block text-gray-300 mb-1">Course / Domain</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        >
                            <option value="">Select Course / Domain</option>
                            <option value="B.Tech CSE">B.Tech CSE</option>
                            <option value="B.Tech ECE">B.Tech ECE</option>
                            <option value="MBBS">MBBS</option>
                            <option value="B.Sc">B.Sc</option>
                            <option value="MCA">MCA</option>
                            <option value="Web Development">Web Development</option>
                            <option value="AI / Machine Learning">AI / Machine Learning</option>
                            <option value="DSA with Java">DSA with Java</option>
                            <option value="Cybersecurity">Cybersecurity</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Year */}
                    <div>
                        <label className="block text-gray-300 mb-1">Year</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        >
                            <option value="">Select Year</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                            <option value="3rd">3rd Year</option>
                            <option value="4th">4th Year</option>
                        </select>
                    </div>

                    {/* College */}
                    <div>
                        <label className="block text-gray-300 mb-1">College Name</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-gray-300 mb-1">Location (City, State)</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Eg: Delhi, Maharashtra"
                            required
                            className="w-full px-4 py-2 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-lg hover:bg-cyan-600 transition-all"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-cyan-400 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
