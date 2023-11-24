import React from "react";

const Home = () => {
  return (
    <div className="text-center bg-cyan-900 text-white max-w-screen-md mx-auto p-8">
      <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-300 mb-8">
        Hi, I'm Joshua dos Santos. I'm a passionate developer, and this is my portfolio home page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-blue-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Projects</h2>
          <p className="text-gray-200">
            Check out some of the projects I've worked on. Each project showcases my skills and expertise.
          </p>
        </div>
        <div className="bg-blue-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Skills</h2>
          <p className="text-gray-200">
            I'm proficient in various technologies such as React, Node.js, and more. Explore my skills and expertise.
          </p>
        </div>
        <div className="bg-blue-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-200">
            Let's connect! If you have any questions or want to discuss a project, feel free to reach out to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
