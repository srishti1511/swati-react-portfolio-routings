import React from "react";

function Project1() {
  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          📝 Project 1: Todo App
        </h2>

        {/* Link */}
        <a
          href="https://to-dolistswati.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          🔗 View Project
        </a>

        {/* Login Info Card */}
        <div className="mt-6 bg-gray-100 rounded-lg p-4 border border-gray-300">
          <p className="font-semibold text-gray-700">Login with:</p>
          <p>📧 Gmail: <b>test@gmail.com</b></p>
          <p>🔑 Password: <b>123456</b></p>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          React To-Do List app with a login screen and dark-themed UI, styled with custom CSS and deployed via Netlify.
        </p>
        <p className="mt-2 text-gray-700 leading-relaxed">
          A simple app to add, delete, and mark tasks as complete ✅.  
          It helps you stay productive and organized.
        </p>
      </div>
    </div>
  );
}

export default Project1;
