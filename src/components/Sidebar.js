import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-xl rounded-r-2xl p-6 flex flex-col">
      {/* Header */}
      <h3 className="text-2xl font-bold text-indigo-600 mb-8 text-center">
        🌟 Mini Portfolio
      </h3>

      {/* Menu */}
      <ul className="space-y-4 text-gray-800 font-medium">
        {/* Home */}
        <li>
          <Link
            to="/"
            className="block px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
          >
            🏠 Home
          </Link>
        </li>

        {/* About */}
        <li>
          <span className="block px-4 py-2 text-gray-600">ℹ️ About</span>
          <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">
            <li>
              <Link
                to="/about"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                📄 Overview
              </Link>
            </li>
            <li>
              <Link
                to="/about/team"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                👩‍💻 Team
              </Link>
            </li>
          </ul>
        </li>

        {/* Projects */}
        <li>
          <span className="block px-4 py-2 text-gray-600">📂 Projects</span>
          <ul className="ml-6 mt-2 space-y-2 text-sm text-gray-600">
            <li>
              <Link
                to="/projects/project1"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                📝 Project 1
              </Link>
            </li>
            <li>
              <Link
                to="/projects/project2"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                🌐 Project 2
              </Link>
            </li>
            <li>
              <Link
                to="/projects/project3"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                🔐 Project 3
              </Link>
            </li>
            <li>
              <Link
                to="/projects/project4"
                className="block px-3 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
              >
                💼 Project 4
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
