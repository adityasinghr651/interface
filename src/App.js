// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import Login from "./pages/Login";
import ProjectsPage from "./pages/ProjectsPage"; // ✅ Import added
import ProgressPage from "./pages/ProgressTracking";
import StudentRegistration from "./pages/StudentRegistration";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar onLoginClick={() => setShowLoginModal(true)} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} /> {/* ✅ Features route */}
        <Route path="/projects" element={<ProjectsPage />} /> {/* ✅ Projects route */}
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/register" element={<StudentRegistration />} />
      </Routes>

      {/* Login Modal */}
      {showLoginModal && (
        <Login onClose={() => setShowLoginModal(false)} />
      )}
    </Router>
  );
}

export default App;
