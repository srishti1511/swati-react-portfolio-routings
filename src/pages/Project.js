import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projectList = [
    { id: 1, title: "📝 Todo App", path: "/project1" },
    { id: 2, title: "🌍 Translator App", path: "/project2" },
    { id: 3, title: "🎲 CAPTCHA Generator", path: "/project3" },
    { id: 4, title: "💼 Portfolio Website", path: "/project4" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projectList.map((proj) => (
        <Link
          key={proj.id}
          to={proj.path}
          className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold">{proj.title}</h3>
          <p className="text-gray-600 mt-2">Click to view details</p>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
