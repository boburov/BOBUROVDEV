"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, VerifiedIcon } from "lucide-react";
import { loyihalar } from "../data";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const skills = [
    { name: "HTML", icon: "html", status: "success" },
    { name: "CSS", icon: "css", status: "success" },
    { name: "Tailwind", icon: "tailwind", status: "success" },
    { name: "JavaScript", icon: "js", status: "success" },
    { name: "TypeScript", icon: "ts", status: "process" },
    { name: "React", icon: "react", status: "success" },
    { name: "Next.js", icon: "nextjs", status: "process" },
    { name: "Node.js", icon: "nodejs", status: "process" },
    { name: "NestJS", icon: "nestjs", status: "process" },
    { name: "Git", icon: "git", status: "success" },
    { name: "NPM", icon: "npm", status: "success" },
    { name: "MUI", icon: "mui", status: "success" },
    { name: "Figma", icon: "figma", status: "success" },
    { name: "Docker", icon: "docker", status: "success" },
  ];

  return (
    <section id="projects" className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Left Card */}
          <h1 className="w-full sm:w-1/2 mb-5 bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] flex items-center gap-4 text-white text-base sm:text-lg lg:text-xl font-medium">
            Crafting Code, Designing Ideas — My Project Showcase
          </h1>

          {/* Right Card */}
          <div className="w-full sm:w-1/2 mb-5 bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-4 text-white text-lg font-semibold">
              <a href="/blog" className="hover:text-indigo-400 transition">
                Visit My Blog
              </a>
            </div>
          </div>
        </div>

        <div className="mb-5 bg-[#2b2b30]/80 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-[#3a3a3f] flex flex-col sm:flex-row items-center gap-4 flex-wrap">
          <span className="text-xl font-semibold text-white min-w-fit">
            ⚙️ Tech Stack & Tools I Love
          </span>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-1 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loyihalar.map((project, i) => (
            <div
              key={project.id}
              className="relative h-[420px] rounded-2xl overflow-hidden group shadow-2xl border border-white/10 hover:shadow-indigo-800/20 transition-shadow duration-500"
              data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
              <img
                src={project.img}
                alt={project.projectName}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 backdrop-blur-md transition-opacity duration-700 opacity-100 group-hover:opacity-0" />

              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/60 to-black/20 transition-all duration-700">
                <div className="absolute bottom-0 p-5 w-full flex flex-col justify-end transform group-hover:opacity-0 transition-all duration-700 ease-out">
                  <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 drop-shadow">
                    {project.projectName}
                    <VerifiedIcon
                      className="w-5 h-5 fill-white stroke-black"
                      strokeWidth={1}
                    />
                  </h2>

                  <p className="text-sm text-white/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.usingLanguage.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 shadow-sm hover:bg-white/20 transition"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.gitHb}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-indigo-500/20 transition backdrop-blur-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.netlify}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-green-500/20 transition backdrop-blur-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;