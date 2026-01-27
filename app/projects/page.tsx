"use client";

import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Projects
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Explore my latest work, side projects, and experiments in web
          development.
        </p>

        {/* Projects Component */}
        <Projects />
      </div>
    </main>
  );
};

export default ProjectsPage;
