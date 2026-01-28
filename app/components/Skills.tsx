"use client";

import React from "react";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vite", icon: "vite" },
  { name: "TailwindCSS", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "MUI", icon: "materialui" },
  { name: "Node.js", icon: "nodejs" },
  { name: "NestJS", icon: "nestjs" },
  { name: "Prisma", icon: "prisma" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Docker", icon: "docker" },
  { name: "AWS S3", icon: "aws" },
  { name: "Figma", icon: "figma" },
  { name: "Python", icon: "python" },
  { name: "Dart", icon: "dart" },
  { name: "Flutter", icon: "flutter" },
];

const Skills = () => {
  // Duplicate list for infinite scroll effect
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section id="ability" className="py-24 relative overflow-hidden">
      <div className="container mb-12">
           <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter" data-aos="fade-up">
            Arsenal <span className="text-purple-500">&</span> Tools
          </h2>
          <p className="text-gray-400 max-w-xl text-lg" data-aos="fade-up" data-aos-delay="100">
            The technologies I use to build robust, scalable, and beautiful applications.
          </p>
      </div>

      {/* Marquee Row 1 */}
      <div className="flex overflow-hidden relative w-full mb-6 group">
         <div className="flex animate-marquee whitespace-nowrap gap-4">
            {marqueeSkills.map((skill, index) => (
                <SkillItem key={`r1-${index}`} skill={skill} />
            ))}
         </div>
         <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap gap-4">
            {marqueeSkills.map((skill, index) => (
                <SkillItem key={`r1-d-${index}`} skill={skill} />
            ))}
         </div>
      </div>

       {/* Marquee Row 2 (Reverse) */}
       <div className="flex overflow-hidden relative w-full group">
         <div className="flex animate-marquee-reverse whitespace-nowrap gap-4">
            {marqueeSkills.map((skill, index) => (
                <SkillItem key={`r2-${index}`} skill={skill} />
            ))}
         </div>
         <div className="flex absolute top-0 animate-marquee2-reverse whitespace-nowrap gap-4">
            {marqueeSkills.map((skill, index) => (
                <SkillItem key={`r2-d-${index}`} skill={skill} />
            ))}
         </div>
      </div>
      
      {/* CSS for custom marquee if not in globals */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee2-reverse {
          animation: marquee2-reverse 40s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
        }
        @keyframes marquee2-reverse {
            0% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

const SkillItem = ({ skill }: { skill: { name: string; icon: string } }) => (
  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-crosshair min-w-[180px]">
    <Image
      src={`https://skillicons.dev/icons?i=${skill.icon}`}
      alt={skill.name}
      width={32}
      height={32}
      className="w-8 h-8"
      unoptimized
    />
    <span className="text-lg font-bold text-gray-200">{skill.name}</span>
  </div>
);

export default Skills;
