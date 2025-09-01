import React from "react";

function Project2() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4">
        🌍 Project 2: Text-Translator App
      </h2>

      <div className="mb-4">
        <a
          href="https://translator-appswati.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          🔗 View Live Project
        </a>
      </div>

      <p className="text-gray-700 leading-relaxed">
        A modern real-time translator app built with <b>React</b>.  
        It includes voice input, language detection, romanization, and speech synthesis —  
        all inside a beautiful animated UI ✨.
      </p>
    </div>
  );
}

export default Project2;
