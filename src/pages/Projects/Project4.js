import React from "react";

function Project4() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">
        💼 Project 4: Personal Portfolio Website
      </h2>

      <div className="mb-4">
        <a
          href="https://swatipatel.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
        >
          🔗 View Live Project
        </a>
      </div>

      <p className="text-gray-700 leading-relaxed">
        This is my <b>personal portfolio website</b> showcasing my <b>skills, projects, and contact information</b>.  
       <br/> It’s built with <b>HTML, CSS, and JavaScript</b> and deployed seamlessly on <b>Netlify</b>.
      </p>
    </div>
  );
}

export default Project4;
