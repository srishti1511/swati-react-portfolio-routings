import React from "react";

function Team() {
  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
        <h2 className="text-2xl font-bold mb-4">👩‍💻 Our Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Right now, it’s just <b>me!</b>  
          But in the future, I’d love to collaborate with more developers and designers.
        </p>
      </div>
    </div>
  );
}

export default Team;
