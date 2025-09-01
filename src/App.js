import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About.js";
import Team from "./pages/About/Team.js";
import Projects from "./pages/Project.js";
import Project1 from "./pages/Projects/Project1";
import Project2 from "./pages/Projects/Project2";
import Project3 from "./pages/Projects/Project3";
import Project4 from "./pages/Projects/Project4";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
            <Route path="/projects/project4" element={<Project4 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
