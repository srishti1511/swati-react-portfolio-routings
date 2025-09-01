import React from "react";

function About() {
  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
        <h1 className="text-2xl font-bold mb-4">ℹ️ About Me</h1>
        <p className="text-gray-700 leading-relaxed">
          I am passionate about web development and enjoy building modern, 
          responsive applications using React. This project is part of my journey 
          to practice <b>React Router</b> for client-side navigation.
        </p>
      </div>
    </div>
  );
}

export default About;
