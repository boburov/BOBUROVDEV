"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
];

const Ability = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-[#f8f8f8] py-24">
      <div className="max-w-[1200px] mx-auto px-4 space-y-20">
        <h2
          className="text-4xl font-bold text-[#1c1c1c] max-md:text-2xl text-center"
          data-aos="fade-down"
        >
          My Skills & Education
        </h2>

        <div className="grid grid-cols-2 gap-20 max-md:grid-cols-1">
          <div>
            <h3
              className="text-2xl font-semibold text-gray-800 mb-6"
              data-aos="fade-right"
            >
              Tech Stack Overview
            </h3>

            <div className="grid grid-cols-5 gap-8 max-md:grid-cols-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 group transition duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={i * 40}
                  title={skill.name}
                >
                  <div className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {skill.name}
                  </span>
                  <span
                    className={`text-[11px] px-2 py-1 rounded-full ${
                      skill.status === "success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {skill.status === "success" ? "Completed" : "In Progress"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 text-gray-700 max-md:text-sm mt-14">
            <h3
              className="text-3xl font-semibold text-[#1c1c1c] border-b pb-2 max-md:text-xl"
              data-aos="fade-left"
            >
              Education Timeline
            </h3>

            <p data-aos="fade-up">
              I began my coding journey in <strong>2021</strong> from Chinobod,
              Uzbekistan. Since then, I’ve consistently built real-world
              frontend applications.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="italic text-xl font-medium text-gray-900"
            >
              “Big dreams need big sacrifices.”
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              I specialize in <strong>React</strong>, and I’m currently learning
              <strong> 3D animations</strong>, canvas rendering, and advanced
              frontend architectures.
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              My goal is to become a senior frontend developer by the end of
              the year and reach <strong>Upper Intermediate</strong> English
              proficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ability;
