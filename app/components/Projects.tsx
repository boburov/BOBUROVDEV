"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ExternalLink, Github, Layers3 } from "lucide-react";
import { loyihalar } from "../data";
import Image from "next/image";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#dadada]">
      <div className="container">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-[#0f0f0f] tracking-tight">
            <Layers3 className="inline mr-2 mb-1" size={36} />
            Projects
          </h1>
          <p className="text-gray-600 text-lg mt-3">
            Each project is a unique piece of digital craftsmanship
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {loyihalar.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl backdrop-blur-lg bg-white/20">
                  <Image
                    src={project.img}
                    alt={project.projectName}
                    className="w-full h-80 object-cover transition duration-500"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 px-2 text-center lg:text-left">
                <h2 className="text-3xl font-semibold text-[#0f0f0f] mb-3">
                  {project.projectName}
                </h2>
                <p className="text-gray-700 mb-5 leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {project.usingLanguage.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 bg-white text-black border border-gray-300 rounded-full shadow-sm"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start gap-4">
                  <a
                    href={project.gitHb}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-black rounded-md hover:bg-black hover:text-white transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.netlify}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-black rounded-md hover:bg-black hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
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
