import React from "react";

function Home() {
  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🏠 Welcome to My Portfolio</h1>
        <p className="text-gray-700 leading-relaxed">
          Hi! I’m <b>Swati Patel</b>, a web developer learning React. 
          This is a small demo app showing client-side routing with 
          <code className="bg-gray-100 px-1 py-0.5 rounded text-sm"> react-router-dom </code>.
        </p>
      </div>
    </div>
  );
}

export default Home;
