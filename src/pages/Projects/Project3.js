import React from "react";

function Project3() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        🎲 Project 3: CAPTCHA / Password Generator App
      </h2>

      <div className="mb-4">
        <a
          href="https://captcha-generatorbyswati.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          🔗 View Live Project
        </a>
      </div>

      <p className="text-gray-700 leading-relaxed">
        A <b>React app</b> that generates random strings with customizable options —  
        including <b>letters, numbers, and special characters</b>.  
      <br/>  It’s built using React hooks like <code>useState</code>, <code>useEffect</code>, and <code>useCallback</code> ⚡.
      </p>
    </div>
  );
}

export default Project3;
